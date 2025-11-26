import { db } from "../db.js";

export const getRoles = async (req, res) => {
  try {
    // Gunakan tanda petik ganda karena nama tabel case-sensitive
    const result = await db.query(`SELECT * FROM "Role" ORDER BY "id_role" ASC`);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error getRoles:", error);
    res.status(500).json({ msg: error.message });
  }
};
