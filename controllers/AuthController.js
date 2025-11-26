import { db } from "../db.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// ==========================
// LOGIN untuk semua role (Admin, ITBP, Engineer)
// ==========================
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // ==========================
    // CARI USER + JOIN ROLE + JOIN POSITION
    // ==========================
    const query = `
      SELECT 
        u."SAP",
        u."name",
        u."username",
        u."password",
        r."role" AS role_name,
        p."position" AS position_name
      FROM "User" u
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      LEFT JOIN "Position" p ON p."id_position" = u."position_id"
      WHERE u."username" = $1
      LIMIT 1
    `;

    const result = await db.query(query, [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ==========================
    // CEK PASSWORD (BCRYPT)
    // ==========================
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ==========================
    // BIKIN JWT
    // ==========================
    const token = jwt.sign(
      {
        SAP: user.SAP,
        username: user.username,
        name: user.name,
        role: user.role_name,
        position: user.position_name || null,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ==========================
    // RESPONSE
    // ==========================
    res.json({
      message: "Login successful",
      token,
      user: {
        SAP: user.SAP,
        name: user.name,
        username: user.username,
        role: user.role_name,
        position: user.position_name || null,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};
