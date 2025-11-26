import { db } from "../db.js"; 
import bcrypt from "bcrypt";



/**
 * 🔹 GET Semua User
 * Bisa difilter berdasarkan role (ADMIN, ITBP, DATA_SCIENCE, dll)
 */
export const getUsers = async (req, res) => {
  try {
    const { role } = req.query; // optional query ?role=ITBP
    
    // 1. Ambil data User, Role, dan Position
    let userQuery = `
      SELECT
        u."SAP", u."name", u."username", u."role_id", u."position_id", 
        r.role AS role_name,
        p.position AS position_name
      FROM "User" u
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      LEFT JOIN "Position" p ON p."id_position" = u."position_id"
    `;

    const queryParams = [];
    if (role) {
      userQuery += ` WHERE r.role = $1`;
      queryParams.push(role.toString());
    }
    userQuery += ` ORDER BY u."SAP"`;

    const usersResult = await db.query(userQuery, queryParams);
    const users = usersResult.rows;
    
    // 2. Ambil semua Proyek dan Tugas yang statusnya "Active"
    const activeProjectsQuery = `
        SELECT "assigned_to" FROM "Project"
        WHERE "status" IN ('TO_DO', 'IN_PROGRESS')
    `;
    const activeTasksQuery = `
        SELECT "assigned_to" FROM "Task"
        WHERE "status" IN ('TO_DO', 'IN_PROGRESS')
    `;

    const projectsResult = await db.query(activeProjectsQuery);
    const tasksResult = await db.query(activeTasksQuery);

    const activeProjectsMap = {};
    projectsResult.rows.forEach(p => {
      activeProjectsMap[p.assigned_to] = (activeProjectsMap[p.assigned_to] || 0) + 1;
    });

    const activeTasksMap = {};
    tasksResult.rows.forEach(t => {
      activeTasksMap[t.assigned_to] = (activeTasksMap[t.assigned_to] || 0) + 1;
    });

    // 3. Gabungkan data dan format output
    const result = users.map((u) => {
      // Hapus kolom yang tidak perlu (password sudah tidak ikut di-select)
      const { role_name, position_name, ...safeData } = u;

      return {
        ...safeData,
        role: { role: role_name, id_role: u.role_id }, // Struktur seperti include Prisma
        position: position_name ? { position: position_name, id_position: u.position_id } : null,
        totalProjects: activeProjectsMap[u.SAP] || 0,
        totalTasks: activeTasksMap[u.SAP] || 0,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getUsers:", error);
    res.status(500).json({ msg: error.message });
  }
};

/**
 * 🔹 GET User berdasarkan SAP
 */
export const getUserById = async (req, res) => {
  try {
    const SAP = Number(req.params.id);

    const query = `
      SELECT
        u.*,
        r.role AS role_name,
        p.position AS position_name
      FROM "User" u
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      LEFT JOIN "Position" p ON p."id_position" = u."position_id"
      WHERE u."SAP" = $1
      LIMIT 1
    `;

    const result = await db.query(query, [SAP]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ msg: "User not found" });

    // Hapus password dari respons
    const { password, role_name, position_name, ...safeData } = user;
    
    // Struktur respons agar menyerupai output Prisma findUnique
    res.status(200).json({
      ...safeData,
      role: { role: role_name, id_role: user.role_id },
      position: position_name ? { position: position_name, id_position: user.position_id } : null,
      // Note: fields 'projects' dan 'tasks' tidak di-include di sini karena kompleksitas join 1:M
    });
  } catch (error) {
    console.error("Error getUserById:", error);
    res.status(500).json({ msg: error.message });
  }
};

/**
 * 🔹 CREATE User (hash password otomatis)
 */
export const createUser = async (req, res) => {
  const { SAP, name, username, password, role_id, position_id } = req.body;

  const client = await db.connect();
  try {
    await client.query('BEGIN'); // Mulai transaksi

    // 1. Cek username unik
    const existingResult = await client.query(
      `SELECT "SAP" FROM "User" WHERE "username" = $1`,
      [username]
    );
    if (existingResult.rowCount > 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ msg: "Username already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const finalPositionId = position_id || null;

    // 3. Masukkan data user
    const insertQuery = `
      INSERT INTO "User" ("SAP", "name", "username", "password", "role_id", "position_id")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const insertResult = await client.query(insertQuery, [
      SAP,
      name,
      username,
      hashedPassword,
      role_id,
      finalPositionId,
    ]);
    const newUser = insertResult.rows[0];

    // 4. Ambil data role dan position untuk respons
    const fetchJoinedQuery = `
      SELECT 
        r.role AS role_name,
        p.position AS position_name
      FROM "User" u
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      LEFT JOIN "Position" p ON p."id_position" = u."position_id"
      WHERE u."SAP" = $1
    `;
    const joinedResult = await client.query(fetchJoinedQuery, [SAP]);
    const { role_name, position_name } = joinedResult.rows[0];

    await client.query('COMMIT'); // Commit transaksi

    // 5. Format respons
    const { password: _, ...safeData } = newUser;
    res.status(201).json({
        ...safeData,
        role: { role: role_name, id_role: newUser.role_id },
        position: position_name ? { position: position_name, id_position: newUser.position_id } : null,
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error("Error createUser:", error);
    res.status(400).json({ msg: error.message });
  } finally {
    client.release();
  }
};


/**
 * 🔹 UPDATE User (support admin & user profile)
 */
export const updateUser = async (req, res) => {
  const SAP = Number(req.params.id);
  const {
    name,
    username,
    role_id,
    position_id,
    oldPassword,
    newPassword,
    password, // admin only
  } = req.body;

  const client = await db.connect();
  try {
    await client.query('BEGIN');

    // 1. Cek User yang akan di-update
    const userResult = await client.query(
      `SELECT "SAP", "username", "password" FROM "User" WHERE "SAP" = $1`,
      [SAP]
    );
    const user = userResult.rows[0];
    if (!user) {
      await client.query('ROLLBACK');
      return res.status(404).json({ msg: "User not found" });
    }

    // 2. Cek username unik (jika username berubah)
    if (username && username !== user.username) {
      const existingResult = await client.query(
        `SELECT "SAP" FROM "User" WHERE "username" = $1 AND "SAP" != $2`,
        [username, SAP]
      );
      if (existingResult.rowCount > 0) {
        await client.query('ROLLBACK');
        return res.status(400).json({ msg: "Username already exists" });
      }
    }

    const dataToUpdate = {};
    const setClauses = [];
    const queryParams = [];
    let paramIndex = 1;
    let newHashedPassword = null;

    // Handle Password Change
    if (password) { // 🔹 1️⃣ Admin ubah password
      newHashedPassword = await bcrypt.hash(password, 10);
    } else if (oldPassword && newPassword) { // 🔹 2️⃣ User ubah password
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        await client.query('ROLLBACK');
        return res.status(400).json({ msg: "Current password is incorrect" });
      }
      newHashedPassword = await bcrypt.hash(newPassword, 10);
    }

    if (name !== undefined) {
      setClauses.push(`"name" = $${paramIndex++}`);
      queryParams.push(name);
    }
    if (username !== undefined) {
      setClauses.push(`"username" = $${paramIndex++}`);
      queryParams.push(username);
    }
    if (role_id !== undefined) {
      setClauses.push(`"role_id" = $${paramIndex++}`);
      queryParams.push(role_id);
    }
    if (position_id !== undefined) {
      setClauses.push(`"position_id" = $${paramIndex++}`);
      queryParams.push(position_id || null);
    }
    if (newHashedPassword) {
      setClauses.push(`"password" = $${paramIndex++}`);
      queryParams.push(newHashedPassword);
    }

    if (setClauses.length === 0) {
        await client.query('ROLLBACK');
        return res.status(200).json({ msg: "No fields to update" });
    }

    // 3. Lakukan UPDATE
    const updateQuery = `
      UPDATE "User" SET ${setClauses.join(", ")}
      WHERE "SAP" = $${paramIndex}
      RETURNING *
    `;
    queryParams.push(SAP);

    const updateResult = await client.query(updateQuery, queryParams);
    const updatedUser = updateResult.rows[0];

    // 4. Ambil data role dan position untuk respons
    const fetchJoinedQuery = `
      SELECT 
        r.role AS role_name,
        p.position AS position_name
      FROM "User" u
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      LEFT JOIN "Position" p ON p."id_position" = u."position_id"
      WHERE u."SAP" = $1
    `;
    const joinedResult = await client.query(fetchJoinedQuery, [SAP]);
    const { role_name, position_name } = joinedResult.rows[0];

    await client.query('COMMIT');

    // 5. Format respons
    const { password: _, ...safeData } = updatedUser;
    res.status(200).json({
        ...safeData,
        role: role_name || null,
        position: position_name || null,
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error("Error updateUser:", error);
    res.status(400).json({ msg: error.message });
  } finally {
    client.release();
  }
};


/**
 * 🔹 DELETE User
 */
export const deleteUser = async (req, res) => {
  try {
    const SAP = Number(req.params.id);

    // Note: Database harus menangani ON DELETE CASCADE/SET NULL pada tabel Project dan Task
    const deleteQuery = `DELETE FROM "User" WHERE "SAP" = $1`;
    const result = await db.query(deleteQuery, [SAP]);

    if (result.rowCount === 0) {
        return res.status(404).json({ msg: "User not found" });
    }
    
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleteUser:", error);
    // Asumsi error code P2003 dari Prisma akan diganti error Postgres Foreign Key
    // Jika ada foreign key violation (RESTRICT), error akan muncul
    res.status(400).json({ msg: error.message });
  }
};