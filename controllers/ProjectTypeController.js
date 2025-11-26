import { db } from "../db.js"; // Import koneksi Pool dari db.js
import dotenv from "dotenv";
dotenv.config();

// =====================================================
// GET ALL PROJECT TYPES
// =====================================================
export const getProjectTypes = async (req, res) => {
    try {
        // Query untuk mengambil semua project type
        const query = `
            SELECT "id_type", "project_type"
            FROM "ProjectType"
            ORDER BY "project_type" ASC
        `;
        const { rows: projectTypes } = await db.query(query);
        
        res.status(200).json(projectTypes);
    } catch (error) {
        console.error("Error fetching Project Types:", error);
        res.status(500).json({ msg: "Failed to fetch project types" });
    }
};

// =====================================================
// GET PROJECT TYPE BY ID
// =====================================================
export const getProjectTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Query untuk mengambil project type berdasarkan id
        const query = `
            SELECT "id_type", "project_type"
            FROM "ProjectType"
            WHERE "id_type" = $1
        `;
        const { rows } = await db.query(query, [id]);
        const projectType = rows[0];

        if (!projectType)
            return res.status(404).json({ msg: "Project type not found" });

        res.status(200).json(projectType);
    } catch (error) {
        console.error("Error fetching project type by ID:", error);
        res.status(500).json({ msg: "Failed to fetch project type" });
    }
};

// =====================================================
// CREATE PROJECT TYPE
// =====================================================
export const createProjectType = async (req, res) => {
    try {
        const { project_type } = req.body;

        if (!project_type)
            return res.status(400).json({ msg: "Project type name is required" });

        // 1. Check for existing project type
        const checkQuery = `
            SELECT "project_type" FROM "ProjectType" WHERE "project_type" = $1
        `;
        const { rows: existingRows } = await db.query(checkQuery, [project_type]);

        if (existingRows.length > 0)
            return res.status(400).json({ msg: "Project type already exists" });

        // 2. Insert new type
        const insertQuery = `
            INSERT INTO "ProjectType" ("project_type")
            VALUES ($1)
            RETURNING "id_type", "project_type"
        `;
        const { rows: newTypeRows } = await db.query(insertQuery, [project_type]);
        const newType = newTypeRows[0];

        res.status(201).json({
            msg: "Project type created successfully",
            data: newType,
        });
    } catch (error) {
        console.error("Error creating project type:", error);
        res.status(500).json({ msg: "Failed to create project type" });
    }
};

// =====================================================
// UPDATE PROJECT TYPE
// =====================================================
export const updateProjectType = async (req, res) => {
    try {
        const { id } = req.params;
        const { project_type } = req.body;

        // 1. Check for existing type by id
        const checkQuery = `
            SELECT "id_type" FROM "ProjectType" WHERE "id_type" = $1
        `;
        const { rows: existingRows } = await db.query(checkQuery, [id]);

        if (existingRows.length === 0)
            return res.status(404).json({ msg: "Project type not found" });

        // 2. Update type
        const updateQuery = `
            UPDATE "ProjectType"
            SET "project_type" = $1
            WHERE "id_type" = $2
            RETURNING "id_type", "project_type"
        `;
        const { rows: updatedRows } = await db.query(updateQuery, [project_type, id]);
        const updated = updatedRows[0];

        res.status(200).json({
            msg: "Project type updated successfully",
            data: updated,
        });
    } catch (error) {
        console.error("Error updating project type:", error);
        res.status(500).json({ msg: "Failed to update project type" });
    }
};

// =====================================================
// DELETE PROJECT TYPE
// =====================================================
export const deleteProjectType = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Check for existence
        const existingQuery = `
            SELECT "id_type" FROM "ProjectType" WHERE "id_type" = $1
        `;
        const { rows: existingRows } = await db.query(existingQuery, [id]);

        if (existingRows.length === 0)
            return res.status(404).json({ msg: "Project type not found" });

        // 2. Check for linked projects (FK constraint)
        // Table Project mereferensi ProjectType melalui project_type_id
        const linkedProjectsQuery = `
            SELECT COUNT(*) AS project_count
            FROM "Project"
            WHERE "project_type_id" = $1
        `;
        const { rows: projectCountRows } = await db.query(linkedProjectsQuery, [id]);
        const projectCount = Number(projectCountRows[0].project_count);

        if (projectCount > 0)
            return res.status(400).json({
                msg: "Cannot delete project type that is linked to existing projects",
            });

        // 3. Delete
        const deleteQuery = `
            DELETE FROM "ProjectType" WHERE "id_type" = $1
        `;
        await db.query(deleteQuery, [id]);

        res.status(200).json({ msg: "Project type deleted successfully" });
    } catch (error) {
        console.error("Error deleting project type:", error);
        res.status(500).json({ msg: "Failed to delete project type" });
    }
};