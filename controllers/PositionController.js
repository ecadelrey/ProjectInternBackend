import { db } from "../db.js"; 
import dotenv from "dotenv";
dotenv.config();

// =====================================================
// GET ALL POSITIONS
// =====================================================
export const getPositions = async (req, res) => {
  try {
    // Mengambil Position beserta data Role yang terkait (JOIN)
    const query = `
      SELECT 
        p.id_position, 
        p.position, 
        p.role_id,
        r.role AS role_name 
      FROM "Position" p
      JOIN "Role" r ON p.role_id = r.id_role
      ORDER BY p.id_position ASC
    `;
    const { rows: positions } = await db.query(query);

    // Memformat hasil agar mirip dengan output Prisma (jika diperlukan)
    const result = positions.map(p => ({
      id_position: p.id_position,
      position: p.position,
      role_id: p.role_id,
      role: {
        id_role: p.role_id,
        role: p.role_name
      }
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getPositions:", error);
    res.status(500).json({ msg: "Failed to fetch positions" });
  }
};

// =====================================================
// GET POSITION BY ID
// =====================================================
export const getPositionById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ msg: "Invalid Position ID format" });
    }

    // Mengambil Position by ID beserta data Role yang terkait (JOIN)
    const query = `
      SELECT 
        p.id_position, 
        p.position, 
        p.role_id,
        r.role AS role_name 
      FROM "Position" p
      JOIN "Role" r ON p.role_id = r.id_role
      WHERE p.id_position = $1
    `;
    const { rows } = await db.query(query, [id]);
    const position = rows[0];

    if (!position)
      return res.status(404).json({ msg: "Position not found" });

    // Memformat hasil agar mirip dengan output Prisma
    const result = {
        id_position: position.id_position,
        position: position.position,
        role_id: position.role_id,
        role: {
            id_role: position.role_id,
            role: position.role_name
        }
    };
    
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getPositionById:", error);
    res.status(500).json({ msg: "Failed to fetch position" });
  }
};

// =====================================================
// CREATE POSITION
// =====================================================
export const createPosition = async (req, res) => {
  try {
    const { position, role_id } = req.body;

    if (!position || !role_id)
      return res.status(400).json({ msg: "Position and role_id are required" });

    const roleIdInt = parseInt(role_id, 10);

    if (isNaN(roleIdInt)) {
        return res.status(400).json({ msg: "Invalid role_id format" });
    }

    // 1. Cek apakah role_id valid
    const checkRoleQuery = `
      SELECT "id_role" FROM "Role" WHERE "id_role" = $1
    `;
    const { rows: roleRows } = await db.query(checkRoleQuery, [roleIdInt]);
    if (roleRows.length === 0)
        return res.status(400).json({ msg: "Role ID not found" });

    // 2. Cek apakah nama posisi sudah ada
    const checkPositionQuery = `
      SELECT "id_position" FROM "Position" WHERE "position" = $1
    `;
    const { rows: existingRows } = await db.query(checkPositionQuery, [position]);

    if (existingRows.length > 0)
      return res.status(400).json({ msg: "Position name already exists" });

    // 3. Insert posisi baru
    const insertQuery = `
      INSERT INTO "Position" ("position", "role_id") 
      VALUES ($1, $2) 
      RETURNING "id_position", "position", "role_id"
    `;
    const { rows: newPositionRows } = await db.query(insertQuery, [position, roleIdInt]);
    const newPosition = newPositionRows[0];

    // Ambil detail Role untuk respons
    const roleDetail = roleRows[0].role; // (Perlu dimodifikasi jika tabel Role punya kolom 'role')

    res.status(201).json({
      msg: "Position created successfully",
      data: {
          ...newPosition,
          role: { id_role: newPosition.role_id, role: roleDetail } 
      },
    });
  } catch (error) {
    console.error("Error createPosition:", error);
    if (error.code === '23503') { // Foreign Key violation
        return res.status(400).json({ msg: "Role ID not found" });
    }
    res.status(500).json({ msg: "Failed to create position" });
  }
};

// =====================================================
// UPDATE POSITION
// =====================================================
export const updatePosition = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { position, role_id } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ msg: "Invalid Position ID format" });
    }
    if (!position || !role_id)
      return res.status(400).json({ msg: "Position and role_id are required" });

    const roleIdInt = parseInt(role_id, 10);
    if (isNaN(roleIdInt)) {
        return res.status(400).json({ msg: "Invalid role_id format" });
    }

    // 1. Check if the position with the given ID exists and fetch current role_id
    const checkExistingQuery = `
      SELECT "id_position", "role_id" FROM "Position" WHERE "id_position" = $1
    `;
    const { rows: existingRows } = await db.query(checkExistingQuery, [id]);

    if (existingRows.length === 0)
      return res.status(404).json({ msg: "Position not found" });

    // 2. Check if the new role_id is valid
    const checkRoleQuery = `
      SELECT "id_role", "role" FROM "Role" WHERE "id_role" = $1
    `;
    const { rows: roleRows } = await db.query(checkRoleQuery, [roleIdInt]);
    if (roleRows.length === 0)
        return res.status(400).json({ msg: "Role ID not found" });
        
    const roleDetail = roleRows[0];

    // 3. Check if the new position name already exists for a *different* ID
    const checkDuplicateQuery = `
      SELECT "id_position" FROM "Position" WHERE "position" = $1 AND "id_position" != $2
    `;
    const { rows: duplicateRows } = await db.query(checkDuplicateQuery, [position, id]);

    if (duplicateRows.length > 0)
      return res.status(400).json({ msg: "Position name already exists for another entry" });

    // 4. Update the position
    const updateQuery = `
      UPDATE "Position" 
      SET "position" = $1, "role_id" = $2
      WHERE "id_position" = $3
      RETURNING "id_position", "position", "role_id"
    `;
    const { rows: updatedRows } = await db.query(updateQuery, [position, roleIdInt, id]);
    const updated = updatedRows[0];

    res.status(200).json({
      msg: "Position updated successfully",
      data: {
          ...updated,
          role: { id_role: updated.role_id, role: roleDetail.role }
      },
    });
  } catch (error) {
    console.error("Error updatePosition:", error);
    if (error.code === '23503') { // Foreign Key violation
        return res.status(400).json({ msg: "Role ID not found" });
    }
    res.status(500).json({ msg: "Failed to update position" });
  }
};

// =====================================================
// DELETE POSITION
// =====================================================
export const deletePosition = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ msg: "Invalid Position ID format" });
    }

    // 1. Check if position exists
    const checkExistingQuery = `
      SELECT "id_position" FROM "Position" WHERE "id_position" = $1
    `;
    const { rows: existingRows } = await db.query(checkExistingQuery, [id]);

    if (existingRows.length === 0)
      return res.status(404).json({ msg: "Position not found" });

    // 2. Check for foreign key constraint: Referenced by TABLE "User"
    const checkUsersQuery = `
      SELECT COUNT(*) AS user_count
      FROM "User" 
      WHERE "position_id" = $1
    `;
    const { rows: userRows } = await db.query(checkUsersQuery, [id]);
    const userCount = parseInt(userRows[0].user_count, 10);

    if (userCount > 0)
      return res.status(400).json({
        msg: "Cannot delete position that is linked to existing users",
      });


    // 3. Delete the position
    const deleteQuery = `
      DELETE FROM "Position" 
      WHERE "id_position" = $1
    `;
    await db.query(deleteQuery, [id]);

    res.status(200).json({ msg: "Position deleted successfully" });
  } catch (error) {
    console.error("Error deletePosition:", error);
    // Jika terjadi FK constraint lain (misalnya Role), error akan ditangani di sini
    res.status(500).json({ msg: "Failed to delete position" });
  }
};