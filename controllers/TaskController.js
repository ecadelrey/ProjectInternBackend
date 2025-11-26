import { db } from "../db.js"; // Import koneksi database dari db.js

// Helper function untuk query SELECT Task yang kompleks (termasuk JOIN)
const taskSelectQuery = `
    SELECT
        t."id_task", t."id_project", t."task_detail", t."task_group_id", t."platform_id",
        t."plan_start_date", t."plan_end_date", t."actual_start", t."actual_end",
        t."task_progress", t."status", t."created_at", t."updated_at",
        t."created_by", t."updated_by", t."assigned_to",

        -- Project
        p."project_name",

        -- Assigned User (Engineer)
        u."SAP" AS user_sap, u."name" AS user_name, u."role_id" AS user_role_id,

        -- Role
        r."id_role" AS role_id, r."role" AS role_name,

        -- Task Group
        tg."task_group" AS group_name,

        -- Platform
        plat."platform" AS platform_name

    FROM "Task" t
    LEFT JOIN "Project" p ON p."id_project" = t."id_project"
    LEFT JOIN "User" u ON u."SAP" = t."assigned_to"
    LEFT JOIN "Role" r ON r."id_role" = u."role_id"
    LEFT JOIN "TaskGroup" tg ON tg."id_group" = t."task_group_id"
    LEFT JOIN "Platform" plat ON plat."id_platform" = t."platform_id"
`;

// Helper function untuk memformat hasil query ke format objek nested seperti Prisma
const formatTaskResult = (taskRow, allHistories = []) => {
    const histories = allHistories.filter(h => h.id_task === taskRow.id_task);

    const sortedHistory = histories.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );

    // Rekonstruksi objek nested
    return {
        ...taskRow,
        project: taskRow.id_project ? { id_project: taskRow.id_project, project_name: taskRow.project_name } : null,
        user: taskRow.user_sap ? {
            SAP: taskRow.user_sap,
            name: taskRow.user_name,
            role_id: taskRow.user_role_id,
            role: taskRow.role_id ? { id_role: taskRow.role_id, role: taskRow.role_name } : null,
        } : null,
        group: taskRow.task_group_id ? { id_group: taskRow.task_group_id, task_group: taskRow.group_name } : null,
        platform: taskRow.platform_id ? { id_platform: taskRow.platform_id, platform: taskRow.platform_name } : null,
        
        // Menggantikan field 'histories' dari Prisma
        histories: histories,
        updated_by: taskRow.updated_by || "-",
        update_history: sortedHistory,

        // Menghapus field flat yang hanya dipakai untuk JOIN
        project_name: undefined,
        user_sap: undefined,
        user_name: undefined,
        user_role_id: undefined,
        role_id: undefined,
        role_name: undefined,
        group_name: undefined,
        platform_name: undefined,
    };
};

// ======================================================
// GET ALL TASKS
// ======================================================
export const getTask = async (req, res) => {
    try {
        // 1. Ambil semua Task dengan JOINS
        const { rows: tasks } = await db.query(taskSelectQuery);

        // 2. Ambil semua History (untuk semua Task)
        const historyQuery = `
            SELECT "id_history", "id_task", "updated_by", "changes", "updated_at"
            FROM "TaskHistory"
        `;
        const { rows: allHistories } = await db.query(historyQuery);

        // 3. Format hasil
        const result = tasks.map((t) => formatTaskResult(t, allHistories));

        res.status(200).json(result);
    } catch (error) {
        console.error("Error getTask:", error);
        res.status(500).json({ msg: error.message });
    }
};


// ======================================================
// GET TASK BY ID
// ======================================================
export const getTaskById = async (req, res) => {
    try {
        const { id_task } = req.params;

        // 1. Ambil Task dengan JOINS
        const taskQuery = `${taskSelectQuery} WHERE t."id_task" = $1`;
        const { rows: taskRows } = await db.query(taskQuery, [id_task]);

        const t = taskRows[0];
        if (!t) return res.status(404).json({ msg: "Task not found" });

        // 2. Ambil History khusus Task ini
        const historyQuery = `
            SELECT "id_history", "id_task", "updated_by", "changes", "updated_at"
            FROM "TaskHistory"
            WHERE "id_task" = $1
        `;
        const { rows: histories } = await db.query(historyQuery, [id_task]);

        // 3. Format dan kirim hasil
        const result = formatTaskResult(t, histories);

        res.status(200).json(result);
    } catch (error) {
        console.error("Error getTaskById:", error);
        res.status(500).json({ msg: error.message });
    }
};


// ======================================================
// CREATE TASK
// ======================================================
export const createTask = async (req, res) => {
    const {
        id_project,
        assigned_to,
        task_group_id,
        task_detail,
        plan_start_date,
        plan_end_date,
        actual_start,
        actual_end,
        platform_id,
        task_progress,
        status,
    } = req.body;

    try {
        const createdBy = req.user?.username || "Unknown";
        const now = new Date();

        const insertQuery = `
            INSERT INTO "Task" (
                "id_project", "assigned_to", "task_group_id", "task_detail",
                "plan_start_date", "plan_end_date", "actual_start", "actual_end",
                "platform_id", "task_progress", "status", "created_by", 
                "created_at", "updated_at"
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING *;
        `;

        const assignedToSAP = assigned_to ? Number(assigned_to) : null;
        const platformIdNum = platform_id ? Number(platform_id) : null;
        const taskProgressNum = task_progress || 0;
        const taskStatus = status || "TO_DO";

        const values = [
            id_project,
            assignedToSAP,
            task_group_id,
            task_detail,
            plan_start_date ? new Date(plan_start_date) : null,
            plan_end_date ? new Date(plan_end_date) : null,
            actual_start ? new Date(actual_start) : null,
            actual_end ? new Date(actual_end) : null,
            platformIdNum,
            taskProgressNum,
            taskStatus,
            createdBy,
            now,
            now,
        ];

        const { rows } = await db.query(insertQuery, values);
        const task = rows[0];

        res.status(201).json({
            ...task,
            updated_by: "-",
        });
    } catch (error) {
        console.error("Error createTask:", error);
        // Error code 23503: Foreign key violation (mirip P2003 di Prisma)
        if (error.code === "23503") { 
            return res.status(400).json({
                msg: "Engineer, Group, atau Platform tidak ditemukan (Foreign Key Error).",
            });
        }
        res.status(400).json({ msg: error.message });
    }
};

// ======================================================
// UPDATE TASK + HISTORY TRACKING
// ======================================================
export const updateTask = async (req, res) => {
    const { id_task } = req.params;
    const {
        id_project,
        assigned_to,
        task_group_id,
        task_detail,
        plan_start_date,
        plan_end_date,
        actual_start,
        actual_end,
        platform_id,
        task_progress,
        status,
    } = req.body;

    let client;
    try {
        client = await db.connect();
        await client.query("BEGIN");

        const updatedBy = req.user?.username || "Unknown";

        // 1. Ambil data lama (seperti findUnique di Prisma) + nama-nama relasi
        const oldTaskQuery = `
            SELECT 
                t.*,
                u."name" AS old_engineer_name,
                tg."task_group" AS old_group_name,
                plat."platform" AS old_platform_name
            FROM "Task" t
            LEFT JOIN "User" u ON u."SAP" = t."assigned_to"
            LEFT JOIN "TaskGroup" tg ON tg."id_group" = t."task_group_id"
            LEFT JOIN "Platform" plat ON plat."id_platform" = t."platform_id"
            WHERE t."id_task" = $1
        `;
        const { rows: oldTaskRows } = await client.query(oldTaskQuery, [id_task]);
        const oldTask = oldTaskRows[0];
        
        if (!oldTask) {
            await client.query("ROLLBACK");
            return res.status(404).json({ msg: "Task not found" });
        }

        // Siapkan data baru (konversi tipe data seperti di Prisma)
        const assignedToSAP = assigned_to ? Number(assigned_to) : null;
        const platformIdNum = platform_id ? Number(platform_id) : null;
        const taskProgressNum = task_progress || 0;
        const taskStatus = status || "TO_DO";
        const now = new Date();

        const updateQuery = `
            UPDATE "Task" SET
                "id_project" = $2,
                "assigned_to" = $3,
                "task_group_id" = $4,
                "task_detail" = $5,
                "plan_start_date" = $6,
                "plan_end_date" = $7,
                "actual_start" = $8,
                "actual_end" = $9,
                "platform_id" = $10,
                "task_progress" = $11,
                "status" = $12,
                "updated_by" = $13,
                "updated_at" = $14
            WHERE "id_task" = $1
            RETURNING *;
        `;
        const updateValues = [
            id_task,
            id_project,
            assignedToSAP,
            task_group_id,
            task_detail,
            plan_start_date ? new Date(plan_start_date) : null,
            plan_end_date ? new Date(plan_end_date) : null,
            actual_start ? new Date(actual_start) : null,
            actual_end ? new Date(actual_end) : null,
            platformIdNum,
            taskProgressNum,
            taskStatus,
            updatedBy,
            now,
        ];

        // 2. Lakukan update
        const { rows: updatedTaskRows } = await client.query(updateQuery, updateValues);
        const task = updatedTaskRows[0];

        // 3. Perbandingan Perubahan (meniru loop Prisma)
        const changedFields = [];
        const newTaskData = {
            id_project,
            assigned_to: assignedToSAP,
            task_group_id,
            task_detail,
            plan_start_date: updateValues[5],
            plan_end_date: updateValues[6],
            actual_start: updateValues[7],
            actual_end: updateValues[8],
            platform_id: platformIdNum,
            task_progress: taskProgressNum,
            status: taskStatus,
        };

        const keysToCompare = Object.keys(newTaskData);

        for (const key of keysToCompare) {
            // Karena new Date() akan menghasilkan objek Date, kita bandingkan dengan konversi ke ISO string atau nilai langsung
            let oldVal = oldTask[key];
            let newVal = newTaskData[key];

            // Konversi Date ke string untuk perbandingan yang konsisten
            if (oldVal instanceof Date) oldVal = oldVal.toISOString();
            if (newVal instanceof Date) newVal = newVal.toISOString();
            
            // Konversi null atau undefined menjadi string kosong/null untuk perbandingan
            const oldValStr = oldVal !== null && oldVal !== undefined ? String(oldVal) : null;
            const newValStr = newVal !== null && newVal !== undefined ? String(newVal) : null;
            
            if (oldValStr !== newValStr) {
                // Perlu lookup nama untuk assigned_to, task_group_id, platform_id
                if (key === "assigned_to") {
                    const oldEngineer = oldTask.old_engineer_name || "-";
                    
                    let newEngineer = "-";
                    if (newVal) {
                        const { rows: userRows } = await client.query('SELECT "name" FROM "User" WHERE "SAP" = $1', [newVal]);
                        newEngineer = userRows.length > 0 ? userRows[0].name : "-";
                    }
                    changedFields.push(`Assigned: '${oldEngineer}' → '${newEngineer}'`);
                } else if (key === "task_group_id") {
                    const oldGroup = oldTask.old_group_name || "-";
                    
                    let newGroup = "-";
                    if (newVal) {
                        const { rows: groupRows } = await client.query('SELECT "task_group" FROM "TaskGroup" WHERE "id_group" = $1', [newVal]);
                        newGroup = groupRows.length > 0 ? groupRows[0].task_group : "-";
                    }
                    changedFields.push(`Task Group: '${oldGroup}' → '${newGroup}'`);
                } else if (key === "platform_id") {
                    const oldPlat = oldTask.old_platform_name || "-";

                    let newPlat = "-";
                    if (newVal) {
                        const { rows: platRows } = await client.query('SELECT "platform" FROM "Platform" WHERE "id_platform" = $1', [newVal]);
                        newPlat = platRows.length > 0 ? platRows[0].platform : "-";
                    }
                    changedFields.push(`Platform: '${oldPlat}' → '${newPlat}'`);
                } else {
                    // Konversi kembali ke format yang diinginkan untuk display (menghapus quotasi 'null' atau 'undefined')
                    const displayOldVal = oldValStr !== null ? oldValStr : "-";
                    const displayNewVal = newValStr !== null ? newValStr : "-";
                    changedFields.push(`${key}: '${displayOldVal}' → '${displayNewVal}'`);
                }
            }
        }

        // 4. Catat History
        if (changedFields.length > 0) {
            const historyInsertQuery = `
                INSERT INTO "TaskHistory" ("id_task", "updated_by", "changes", "updated_at")
                VALUES ($1, $2, $3, $4);
            `;
            await client.query(historyInsertQuery, [
                task.id_task,
                updatedBy,
                changedFields.join(", "),
                now,
            ]);
        }

        await client.query("COMMIT");
        res.status(200).json(task);

    } catch (error) {
        if (client) await client.query("ROLLBACK");
        console.error("Error updateTask:", error);
        
        // Error code 23503: Foreign key violation (mirip P2003 di Prisma)
        if (error.code === "23503") {
            return res.status(400).json({
                msg: "Engineer, Group, atau Platform tidak ditemukan (Foreign Key Error).",
            });
        }
        res.status(400).json({ msg: error.message });
    } finally {
        if (client) client.release();
    }
};

// ======================================================
// DELETE TASK
// ======================================================
export const deleteTask = async (req, res) => {
    try {
        const { id_task } = req.params;

        const deleteQuery = `
            DELETE FROM "Task" WHERE "id_task" = $1 RETURNING *;
        `;
        const { rows } = await db.query(deleteQuery, [id_task]);

        if (rows.length === 0) return res.status(404).json({ msg: "Task not found" });

        res.status(200).json({ msg: "Task berhasil dihapus", task: rows[0] });
    } catch (error) {
        console.error("Error deleteTask:", error);
        res.status(400).json({ msg: error.message });
    }
};

// ======================================================
// GET TASKS BY PROJECT ID
// ======================================================
export const getTasksByProject = async (req, res) => {
    try {
        const { id_project } = req.params;

        // 1. Ambil Task berdasarkan id_project dengan JOINS
        const taskQuery = `${taskSelectQuery} WHERE t."id_project" = $1`;
        const { rows: tasks } = await db.query(taskQuery, [id_project]);

        if (tasks.length === 0) return res.status(200).json([]);
        
        // Dapatkan semua id_task yang ditemukan untuk filtering history
        const taskIds = tasks.map(t => t.id_task);
        
        // 2. Ambil History hanya untuk Task yang relevan
        const historyQuery = `
            SELECT "id_history", "id_task", "updated_by", "changes", "updated_at"
            FROM "TaskHistory"
            WHERE "id_task" = ANY($1::varchar[])
        `;
        const { rows: allHistories } = await db.query(historyQuery, [taskIds]);


        // 3. Format hasil
        const result = tasks.map((t) => formatTaskResult(t, allHistories));

        res.status(200).json(result);
    } catch (error) {
        console.error("Error getTasksByProject:", error);
        res.status(500).json({ msg: error.message });
    }
};