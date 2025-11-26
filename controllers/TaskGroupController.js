import { db } from "../db.js";

// ============================================
// GET ALL TASK GROUPS
// ============================================
export const getTaskGroups = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT "id_group", "task_group"
       FROM "TaskGroup"
       ORDER BY "id_group" ASC`
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error getTaskGroups:", error);
    res.status(500).json({ msg: error.message });
  }
};

// ============================================
// GET TASK GROUP BY ID
// ============================================
export const getTaskGroupById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ msg: "Task group ID is required" });

    const result = await db.query(
      `SELECT "id_group", "task_group"
       FROM "TaskGroup"
       WHERE "id_group" = $1`,
      [id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ msg: "Task group not found" });

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error getTaskGroupById:", error);
    res.status(500).json({ msg: error.message });
  }
};

// ============================================
// CREATE TASK GROUP
// ============================================
export const createTaskGroup = async (req, res) => {
  try {
    const { task_group } = req.body;

    if (!task_group)
      return res.status(400).json({ msg: "Task group name is required" });

    // Cek duplikasi
    const exist = await db.query(
      `SELECT * FROM "TaskGroup" WHERE "task_group" = $1`,
      [task_group]
    );

    if (exist.rows.length > 0)
      return res.status(400).json({ msg: "Task group already exists" });

    const insertResult = await db.query(
      `INSERT INTO "TaskGroup" ("task_group")
       VALUES ($1)
       RETURNING "id_group", "task_group"`,
      [task_group]
    );

    res.status(201).json(insertResult.rows[0]);
  } catch (error) {
    console.error("Error createTaskGroup:", error);
    res.status(500).json({ msg: error.message });
  }
};

// ============================================
// UPDATE TASK GROUP
// ============================================
export const updateTaskGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { task_group } = req.body;

    if (!task_group)
      return res.status(400).json({ msg: "Task group name is required" });

    const exist = await db.query(
      `SELECT * FROM "TaskGroup" WHERE "id_group" = $1`,
      [id]
    );
    if (exist.rows.length === 0)
      return res.status(404).json({ msg: "Task group not found" });

    const updateResult = await db.query(
      `UPDATE "TaskGroup"
       SET "task_group" = $1
       WHERE "id_group" = $2
       RETURNING "id_group", "task_group"`,
      [task_group, id]
    );

    res.status(200).json(updateResult.rows[0]);
  } catch (error) {
    console.error("Error updateTaskGroup:", error);
    res.status(500).json({ msg: error.message });
  }
};

// ============================================
// DELETE TASK GROUP
// ============================================
export const deleteTaskGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const exist = await db.query(
      `SELECT * FROM "TaskGroup" WHERE "id_group" = $1`,
      [id]
    );

    if (exist.rows.length === 0)
      return res.status(404).json({ msg: "Task group not found" });

    await db.query(
      `DELETE FROM "TaskGroup"
       WHERE "id_group" = $1`,
      [id]
    );

    res.status(200).json({ msg: "Task group deleted successfully" });
  } catch (error) {
    console.error("Error deleteTaskGroup:", error);
    res.status(500).json({ msg: error.message });
  }
};
