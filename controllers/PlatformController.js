import { db } from "../db.js"; 
import dotenv from "dotenv";
dotenv.config();

// =====================================================
// GET ALL PLATFORMS
// =====================================================
export const getPlatforms = async (req, res) => {
  try {
    const query = `
      SELECT 
        "id_platform", 
        "platform"
      FROM "Platform"
      ORDER BY "platform" ASC
    `;
    const { rows: platforms } = await db.query(query);

    // Map rows to match the exact output structure (although unnecessary here, it mimics Prisma's select)
    const result = platforms.map(p => ({
      id_platform: p.id_platform,
      platform: p.platform,
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching platforms:", error);
    res.status(500).json({ msg: "Failed to fetch platforms" });
  }
};

// =====================================================
// GET PLATFORM BY ID
// =====================================================
export const getPlatformById = async (req, res) => {
  try {
    const { id } = req.params;

    // Use parameterized query to prevent SQL Injection
    const query = `
      SELECT 
        "id_platform", 
        "platform"
      FROM "Platform" 
      WHERE "id_platform" = $1
    `;
    const { rows } = await db.query(query, [id]);
    const platform = rows[0];

    if (!platform)
      return res.status(404).json({ msg: "Platform not found" });

    res.status(200).json(platform);
  } catch (error) {
    console.error("Error fetching platform by ID:", error);
    res.status(500).json({ msg: "Failed to fetch platform" });
  }
};

// =====================================================
// CREATE PLATFORM
// =====================================================
export const createPlatform = async (req, res) => {
  try {
    const { platform } = req.body;

    if (!platform)
      return res.status(400).json({ msg: "Platform name is required" });

    // 1. Check if platform already exists (case-sensitive check based on your table structure)
    const checkQuery = `
      SELECT "id_platform"
      FROM "Platform"
      WHERE "platform" = $1
    `;
    const { rows: existingRows } = await db.query(checkQuery, [platform]);

    if (existingRows.length > 0)
      return res.status(400).json({ msg: "Platform already exists" });

    // 2. Insert new platform and return the created row
    const insertQuery = `
      INSERT INTO "Platform" ("platform") 
      VALUES ($1) 
      RETURNING "id_platform", "platform"
    `;
    const { rows: newPlatformRows } = await db.query(insertQuery, [platform]);
    const newPlatform = newPlatformRows[0];

    res.status(201).json({
      msg: "Platform created successfully",
      data: newPlatform,
    });
  } catch (error) {
    console.error("Error creating platform:", error);
    // Check for unique constraint violation (optional, but good practice)
    if (error.code === '23505') { // PostgreSQL unique violation error code
      return res.status(400).json({ msg: "Platform name already exists" });
    }
    res.status(500).json({ msg: "Failed to create platform" });
  }
};

// =====================================================
// UPDATE PLATFORM
// =====================================================
export const updatePlatform = async (req, res) => {
  try {
    const { id } = req.params;
    const { platform } = req.body;

    // 1. Check if the platform with the given ID exists
    const checkExistingQuery = `
      SELECT "id_platform"
      FROM "Platform"
      WHERE "id_platform" = $1
    `;
    const { rows: existingRows } = await db.query(checkExistingQuery, [id]);

    if (existingRows.length === 0)
      return res.status(404).json({ msg: "Platform not found" });
      
    // 2. Check if the new platform name already exists for a *different* ID
    const checkDuplicateQuery = `
      SELECT "id_platform"
      FROM "Platform"
      WHERE "platform" = $1 AND "id_platform" != $2
    `;
    const { rows: duplicateRows } = await db.query(checkDuplicateQuery, [platform, id]);

    if (duplicateRows.length > 0)
      return res.status(400).json({ msg: "Platform name already exists for another entry" });

    // 3. Update the platform
    const updateQuery = `
      UPDATE "Platform" 
      SET "platform" = $1 
      WHERE "id_platform" = $2
      RETURNING "id_platform", "platform"
    `;
    const { rows: updatedRows } = await db.query(updateQuery, [platform, id]);
    const updated = updatedRows[0];

    res.status(200).json({
      msg: "Platform updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating platform:", error);
    res.status(500).json({ msg: "Failed to update platform" });
  }
};

// =====================================================
// DELETE PLATFORM
// =====================================================
export const deletePlatform = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Check if platform exists
    const checkPlatformQuery = `
      SELECT "id_platform"
      FROM "Platform"
      WHERE "id_platform" = $1
    `;
    const { rows: platformRows } = await db.query(checkPlatformQuery, [id]);

    if (platformRows.length === 0)
      return res.status(404).json({ msg: "Platform not found" });

    // 2. Check if platform is linked to any tasks (as per your table reference: TABLE "Task" CONSTRAINT "Task_platform_id_fkey"...)
    const checkTasksQuery = `
      SELECT COUNT(*) AS task_count
      FROM "Task" 
      WHERE "platform_id" = $1
    `;
    const { rows: taskRows } = await db.query(checkTasksQuery, [id]);
    const taskCount = parseInt(taskRows[0].task_count, 10);

    if (taskCount > 0)
      return res.status(400).json({
        msg: "Cannot delete platform that is linked to existing tasks",
      });

    // 3. Delete the platform
    const deleteQuery = `
      DELETE FROM "Platform" 
      WHERE "id_platform" = $1
    `;
    await db.query(deleteQuery, [id]);

    res.status(200).json({ msg: "Platform deleted successfully" });
  } catch (error) {
    console.error("Error deleting platform:", error);
    res.status(500).json({ msg: "Failed to delete platform" });
  }
};