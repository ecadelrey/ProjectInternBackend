import { db } from "../db.js";
import ExcelJS from "exceljs";
import dotenv from "dotenv";

dotenv.config();

// Helper untuk format data tanggal dari DB
const formatProjectData = (project) => {
    // Pastikan tanggal diformat sebagai Date object atau null
    const dateFields = [
        'req_date', 'plan_start_date', 'plan_end_date',
        'actual_start', 'actual_end', 'live_date', 'created_at', 'updated_at'
    ];
    dateFields.forEach(field => {
        if (project[field]) {
            project[field] = new Date(project[field]);
        } else {
            project[field] = null;
        }
    });

    // Sesuaikan format agar mirip Prisma: menggabungkan data user dan role
    project.user = project.assigned_to_name || project.assigned_to_role
        ? {
            id: project.assigned_to, // Asumsi ID user
            name: project.assigned_to_name,
            role: { role: project.assigned_to_role }
        }
        : null;

    project.projectType = project.project_type_name
        ? { project_type: project.project_type_name }
        : null;

    delete project.assigned_to_name;
    delete project.assigned_to_role;
    delete project.project_type_name;

    return project;
};

// Helper untuk menggabungkan tasks dan histories ke projects
const mergeRelatedData = (projects, allTasks, allHistories) => {
    return projects.map(p => {
        const pId = p.id_project;
        const tasks = allTasks.filter(t => t.id_project === pId).map(t => {
            // Memformat task agar mirip dengan output Prisma
            const task = { ...t };
            task.user = t.user_name ? { name: t.user_name } : null;
            task.group = t.group_name ? { task_group: t.group_name } : null;
            task.platform = t.platform_name ? { platform: t.platform_name } : null;
            // Pastikan tanggal task juga di-format
            if (task.actual_start) task.actual_start = new Date(task.actual_start);
            if (task.actual_end) task.actual_end = new Date(task.actual_end);

            delete task.user_name;
            delete task.group_name;
            delete task.platform_name;
            return task;
        });

        const histories = allHistories
            .filter(h => h.id_project === pId)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        // --- Business Logic Calculation ---
        const totalTasks = tasks?.length || 0;
        const completedTasks = tasks?.filter(t => t.status === "COMPLETED").length || 0;
        const progress = totalTasks > 0
            ? Math.round(tasks.reduce((sum, t) => sum + (t.task_progress || 0), 0) / totalTasks)
            : 0;

        let status = "TO_DO";
        if (progress === 100) status = "COMPLETED";
        else if (progress > 0) status = "IN_PROGRESS";

        // Calculate actual_start (earliest task start date)
        const validStartDates = tasks
            .filter(t => t.actual_start)
            .map(t => new Date(t.actual_start).getTime());
        const actual_start = validStartDates.length > 0
            ? new Date(Math.min(...validStartDates))
            : null;

        // Calculate actual_end (latest task end date, only if all completed)
        let actual_end = null;
        if (completedTasks > 0 && completedTasks === totalTasks) {
            const validEndDates = tasks
                .filter(t => t.actual_end)
                .map(t => new Date(t.actual_end).getTime());
            actual_end = validEndDates.length > 0
                ? new Date(Math.max(...validEndDates))
                : null;
        }

        return {
            ...p,
            tasks,
            histories,
            project_progress: progress,
            status, // Status yang dihitung berdasarkan task
            actual_start,
            actual_end,
            assigned_to_name: p.user?.name || null,
            assigned_to_role: p.user?.role?.role || null,
            project_type_name: p.projectType?.project_type || null,
            update_history: histories,
        };
    });
};


// =====================================================
// GET ALL PROJECTS
// =====================================================
export const getProject = async (req, res) => {
    try {
        // 1. Fetch Projects with main relations
        const projectQuery = `
            SELECT
                p.*,
                u.name AS assigned_to_name,
                r.role AS assigned_to_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
            ORDER BY p.created_at DESC
        `;
        const { rows: projectRows } = await db.query(projectQuery);
        let projects = projectRows.map(formatProjectData);

        // 2. Fetch all Tasks with required joins
        const taskQuery = `
            SELECT
                t.id_project, t.task_progress, t.status, t.actual_start, t.actual_end,
                u.name AS user_name,
                g.task_group AS group_name,
                pl.platform AS platform_name
            FROM "Task" t
            LEFT JOIN "User" u ON t.assigned_to = u."SAP"
            LEFT JOIN "TaskGroup" g ON t.task_group_id = g.id_group -- Fixed: changed "Group" to "TaskGroup"
            LEFT JOIN "Platform" pl ON t.platform_id = pl.id_platform 
        `;
        const { rows: allTasks } = await db.query(taskQuery);

        // 3. Fetch all Histories
        const historyQuery = `SELECT * FROM "ProjectHistory"`;
        const { rows: allHistories } = await db.query(historyQuery);

        // 4. Merge data and apply business logic
        let result = mergeRelatedData(projects, allTasks, allHistories);

        // 5. Apply ITGA filter logic
        const userRole = req.user?.role?.toUpperCase();
        if (userRole === "ITGA") {
            result = result.filter(p => p.assigned_to_role?.toUpperCase() === "ITBP");
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error getProject:", error);
        res.status(500).json({ msg: error.message });
    }
};

// =====================================================
// GET PROJECT BY ID
// =====================================================
export const getProjectById = async (req, res) => {
    try {
        const { id_project } = req.params;

        // 1. Fetch Project with main relations
        const projectQuery = `
            SELECT
                p.*,
                u.name AS assigned_to_name,
                r.role AS assigned_to_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
            WHERE p.id_project = $1
        `;
        const { rows: projectRows } = await db.query(projectQuery, [id_project]);
        const response = projectRows[0];

        if (!response) return res.status(404).json({ msg: "Project not found" });

        const project = formatProjectData(response);

        // 2. Fetch Tasks for this project
        const taskQuery = `
            SELECT
                t.*,
                u.name AS user_name,
                g.task_group AS group_name,
                pl.platform AS platform_name
            FROM "Task" t
            LEFT JOIN "User" u ON t.assigned_to = u."SAP"
            LEFT JOIN "TaskGroup" g ON t.task_group_id = g.id_group -- Fixed: changed "Group" to "TaskGroup"
            LEFT JOIN "Platform" pl ON t.platform_id = pl.id_platform
            WHERE t.id_project = $1
        `;
        const { rows: taskRows } = await db.query(taskQuery, [id_project]);

        // 3. Fetch Histories for this project
        const historyQuery = `SELECT * FROM "ProjectHistory" WHERE id_project = $1`;
        const { rows: historyRows } = await db.query(historyQuery, [id_project]);

        // 4. Format Tasks & Histories
        const tasks = taskRows.map(t => ({
            ...t,
            user: t.user_name ? { name: t.user_name } : null,
            group: t.group_name ? { task_group: t.group_name } : null,
            platform: t.platform_name ? { platform: t.platform_name } : null,
            actual_start: t.actual_start ? new Date(t.actual_start) : null,
            actual_end: t.actual_end ? new Date(t.actual_end) : null,
        }));

        const sortedHistory = historyRows.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        res.status(200).json({
            ...project,
            tasks,
            histories: sortedHistory,
            update_history: sortedHistory,
            assigned_to_name: project.user?.name || null,
            assigned_to_group: project.user?.role?.role || null,
            project_type_name: project.projectType?.project_type || null,
        });
    } catch (error) {
        console.error("Error getProjectById:", error);
        res.status(500).json({ msg: error.message });
    }
};


// =====================================================
// CREATE PROJECT
// =====================================================
export const createProject = async (req, res) => {
    const {
        assigned_to, project_name, project_type_id, level,
        req_date, plan_start_date, plan_end_date, actual_start,
        actual_end, live_date, remark, status,
    } = req.body;

    try {
        const createdBy = req.user?.username || "Unknown";
        const assignedTo = assigned_to ? Number(assigned_to) : null;
        const projectStatus = status || "TO_DO";
        const now = new Date();

        // 1. Insert Project
        const insertQuery = `
            INSERT INTO "Project" (
                assigned_to, project_name, project_type_id, level, req_date, 
                plan_start_date, plan_end_date, actual_start, actual_end, 
                live_date, remark, status, created_by, updated_by, updated_at
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
            RETURNING *
        `;

        const values = [
            assignedTo, project_name, project_type_id, level, req_date ? new Date(req_date) : null,
            plan_start_date ? new Date(plan_start_date) : null, plan_end_date ? new Date(plan_end_date) : null,
            actual_start ? new Date(actual_start) : null, actual_end ? new Date(actual_end) : null,
            live_date ? new Date(live_date) : null, remark, projectStatus, createdBy, createdBy, now
        ];

        const { rows: newProjectRows } = await db.query(insertQuery, values);
        const newProject = newProjectRows[0];

        // 2. Fetch related data for response
        const fetchRelationsQuery = `
            SELECT
                u.name AS assigned_to_name,
                r.role AS assigned_to_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
            WHERE p.id_project = $1
        `;
        const { rows: relationRows } = await db.query(fetchRelationsQuery, [newProject.id_project]);
        const relations = relationRows[0] || {};

        const project = formatProjectData({
            ...newProject,
            ...relations
        });

        res.status(201).json({
            ...project,
            assigned_to_name: project.user?.name || null,
            assigned_to_group: project.user?.role?.role || null,
        });
    } catch (error) {
        console.error("Error createProject:", error);
        // Handle specific DB error codes (e.g., FK violation)
        if (error.code === '23503') {
            return res.status(400).json({ msg: "Foreign key constraint failed (e.g., assigned_to or project_type_id not found)." });
        }
        res.status(400).json({ msg: error.message });
    }
};

// =====================================================
// UPDATE PROJECT
// =====================================================
export const updateProject = async (req, res) => {
    let {
        assigned_to, project_name, project_type_id, level,
        req_date, plan_start_date, plan_end_date, actual_start,
        actual_end, live_date, remark, status,
    } = req.body;

    const assignedTo = assigned_to ? Number(assigned_to) : null;

    try {
        const { id_project } = req.params;
        const updatedBy = req.user?.username || "Unknown";
        const now = new Date();

        // 1. Fetch OLD project data with relations for history logging
        const oldProjectQuery = `
            SELECT
                p.*,
                u.name AS user_name,
                r.role AS user_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
            WHERE p.id_project = $1
        `;
        const { rows: oldProjectRows } = await db.query(oldProjectQuery, [id_project]);
        const oldProjectRaw = oldProjectRows[0];
        if (!oldProjectRaw) return res.status(404).json({ msg: "Project not found" });

        // 2. Update Project
        const updateQuery = `
            UPDATE "Project" SET
                assigned_to = $1, project_name = $2, project_type_id = $3, level = $4,
                req_date = $5, plan_start_date = $6, plan_end_date = $7,
                actual_start = $8, actual_end = $9, live_date = $10,
                remark = $11, status = $12, updated_by = $13, updated_at = $14
            WHERE id_project = $15
            RETURNING *
        `;

        const values = [
            assignedTo, project_name, project_type_id, level, req_date ? new Date(req_date) : null,
            plan_start_date ? new Date(plan_start_date) : null, plan_end_date ? new Date(plan_end_date) : null,
            actual_start ? new Date(actual_start) : null, actual_end ? new Date(actual_end) : null,
            live_date ? new Date(live_date) : null, remark, status || "TO_DO", updatedBy, now, id_project
        ];

        const { rows: updatedRows } = await db.query(updateQuery, values);
        const newProjectRaw = updatedRows[0];

        // 3. Fetch NEW project relations for comparison and response
        const newRelationsQuery = `
            SELECT
                u.name AS user_name,
                r.role AS user_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
            WHERE p.id_project = $1
        `;
        const { rows: newRelationRows } = await db.query(newRelationsQuery, [id_project]);
        const newRelations = newRelationRows[0] || {};
        
        const project = formatProjectData({
            ...newProjectRaw,
            assigned_to_name: newRelations.user_name,
            assigned_to_role: newRelations.user_role,
            project_type_name: newRelations.project_type_name,
        });

        // 4. Log perubahan (history)
        const changedFields = [];
        const fieldsToCheck = [
            "assigned_to", "project_name", "project_type_id", "level", "req_date",
            "plan_start_date", "plan_end_date", "actual_start", "actual_end",
            "live_date", "remark", "status",
        ];

        for (const key of fieldsToCheck) {
            const oldVal = oldProjectRaw[key];
            const newVal = newProjectRaw[key];

            if (key === "assigned_to") {
                if (oldVal !== newVal) {
                    const oldUser = oldProjectRaw.user_name || "Unassigned";
                    const newUser = newRelations.user_name || "Unassigned";
                    const oldGroup = oldProjectRaw.user_role || "-";
                    const newGroup = newRelations.user_role || "-";
                    changedFields.push(
                        `Assigned: '${oldGroup} - ${oldUser}' → '${newGroup} - ${newUser}'`
                    );
                }
            } else if (key === "project_type_id") {
                if (oldVal !== newVal) {
                    const oldType = oldProjectRaw.project_type_name || oldVal;
                    const newType = newRelations.project_type_name || newVal;
                    changedFields.push(
                        `Project Type: '${oldType}' → '${newType}'`
                    );
                }
            } else {
                const oldStr = oldVal instanceof Date ? oldVal.toISOString().split("T")[0] : oldVal ?? "";
                const newStr = newVal instanceof Date ? newVal.toISOString().split("T")[0] : newVal ?? "";
                if (oldStr !== newStr)
                    changedFields.push(`${key}: '${oldStr}' → '${newStr}'`);
            }
        }

        if (changedFields.length > 0) {
            const historyInsertQuery = `
                INSERT INTO "ProjectHistory" (id_project, updated_by, changes, updated_at) 
                VALUES ($1, $2, $3, $4)
            `;
            await db.query(historyInsertQuery, [id_project, updatedBy, changedFields.join(", "), now]);
        }


        res.status(200).json({
            ...project,
            assigned_to_name: project.user?.name || null,
            assigned_to_group: project.user?.role?.role || null,
        });
    } catch (error) {
        console.error("Error updateProject:", error);
        if (error.code === '23503') {
            return res.status(400).json({ msg: "Foreign key constraint failed (Assigned user atau Project Type ID tidak ditemukan)." });
        }
        res.status(400).json({ msg: error.message });
    }
};

// =====================================================
// DELETE PROJECT
// =====================================================
export const deleteProject = async (req, res) => {
    try {
        const id_project = req.params.id_project;

        // 1. Check if the project has tasks
        const checkTasksQuery = `SELECT COUNT(*) AS task_count FROM "Task" WHERE id_project = $1`;
        const { rows: taskRows } = await db.query(checkTasksQuery, [id_project]);
        const taskCount = parseInt(taskRows[0].task_count, 10);

        if (taskCount > 0) {
            return res.status(400).json({
                msg: "Project tidak bisa dihapus karena sudah memiliki task",
            });
        }

        // 2. Delete the project
        const deleteQuery = `DELETE FROM "Project" WHERE id_project = $1 RETURNING *`;
        const { rows: deletedRows } = await db.query(deleteQuery, [id_project]);

        if (deletedRows.length === 0) {
            return res.status(404).json({ msg: "Project not found" });
        }

        res.status(200).json({ msg: "Project berhasil dihapus", project: deletedRows[0] });
    } catch (error) {
        console.error("Error deleteProject:", error);
        res.status(400).json({ msg: error.message });
    }
};

// =====================================================
// UPDATE PROJECT PROGRESS
// =====================================================
export const updateProjectProgress = async (req, res) => {
    const { id_project } = req.params;

    try {
        // 1. Fetch Tasks for calculation
        const tasksQuery = `SELECT * FROM "Task" WHERE id_project = $1`;
        const { rows: tasks } = await db.query(tasksQuery, [id_project]);

        if (!tasks || tasks.length === 0) {
            return res.status(200).json({ msg: "No tasks, project remains unchanged" });
        }

        // 2. Calculate Progress & Status (JS logic)
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter((t) => t.status === "COMPLETED").length;

        const progress = Math.round(
            tasks.reduce((sum, t) => sum + (t.task_progress || 0), 0) / totalTasks
        );

        let status = "TO_DO";
        if (progress === 100) status = "COMPLETED";
        else if (progress > 0) status = "IN_PROGRESS";

        // Calculate actual_start
        const validStartDates = tasks
            .filter(t => t.actual_start)
            .map(t => new Date(t.actual_start).getTime());
        const actual_start = validStartDates.length > 0
            ? new Date(Math.min(...validStartDates))
            : null;

        // Calculate actual_end
        let actual_end = null;
        if (completedTasks === totalTasks) {
            const validEndDates = tasks
                .filter(t => t.actual_end)
                .map(t => new Date(t.actual_end).getTime());
            actual_end = validEndDates.length > 0
                ? new Date(Math.max(...validEndDates))
                : null;
        }

        // 3. Update Project
        const updateQuery = `
            UPDATE "Project" SET 
                project_progress = $1, status = $2, actual_start = $3, actual_end = $4
            WHERE id_project = $5
            RETURNING *
        `;
        const updateValues = [progress, status, actual_start, actual_end, id_project];

        const { rows: projectRows } = await db.query(updateQuery, updateValues);

        res.status(200).json(projectRows[0]);
    } catch (error) {
        console.error("Error updateProjectProgress:", error);
        res.status(500).json({ msg: error.message });
    }
};

// =====================================================
// DOWNLOAD EXCEL
// =====================================================
export const downloadProjectExcel = async (req, res) => {
    try {
        const { start, end } = req.query;

        // 1. Fetch all Projects with relations
        let projectQuery = `
            SELECT
                p.*,
                u.name AS assigned_to_name,
                r.role AS assigned_to_role,
                pt.project_type AS project_type_name
            FROM "Project" p
            LEFT JOIN "User" u ON p.assigned_to = u."SAP"
            LEFT JOIN "Role" r ON u.role_id = r.id_role
            LEFT JOIN "ProjectType" pt ON p.project_type_id = pt.id_type
        `;
        const { rows: projectRows } = await db.query(projectQuery);
        let projects = projectRows.map(p => formatProjectData(p));

        // 2. Fetch all Tasks with deep relations
        const taskQuery = `
            SELECT
                t.*,
                p.project_name,
                u_task.name AS user_name,
                r_task.role AS user_role,
                g.task_group AS group_name,
                pl.platform AS platform_name
            FROM "Task" t
            JOIN "Project" p ON t.id_project = p.id_project
            LEFT JOIN "User" u_task ON t.assigned_to = u_task."SAP"
            LEFT JOIN "Role" r_task ON u_task.role_id = r_task.id_role
            LEFT JOIN "TaskGroup" g ON t.task_group_id = g.id_group -- Fixed: changed "Group" to "TaskGroup"
            LEFT JOIN "Platform" pl ON t.platform_id = pl.id_platform
        `;
        const { rows: taskRows } = await db.query(taskQuery);

        // 3. Merge tasks into projects object (for easy access to p.tasks)
        const projectMap = new Map();
        projects.forEach(p => {
            p.tasks = [];
            projectMap.set(p.id_project, p);
        });

        taskRows.forEach(t => {
            const project = projectMap.get(t.id_project);
            if (project) {
                // Attach minimal task info needed for Excel, plus relations
                project.tasks.push({
                    ...t,
                    user: { name: t.user_name, role: { role: t.user_role } },
                    group: { task_group: t.group_name },
                    platform: { platform: t.platform_name },
                });
            }
        });

        // 4. Filter berdasarkan tanggal plan_start_date (JS filtering)
        const startDate = start ? new Date(start) : new Date("1970-01-01");
        const endDate = end ? new Date(end) : new Date();

        const filtered = projects.filter((p) => {
            if (!p.plan_start_date) return false;
            const d = new Date(p.plan_start_date);
            return d >= startDate && d <= endDate;
        });

        // 5. Bagi proyek dan task berdasarkan role user assigned
        const roleGroups = {
            ITBP: { projects: [], tasks: [] },
            ITGA: { projects: [], tasks: [] },
            SAP: { projects: [], tasks: [] },
            DATA_SCIENCE: { projects: [], tasks: [] },
        };

        filtered.forEach((p) => {
            const role = p.user?.role?.role?.toUpperCase() || "UNKNOWN";

            if (roleGroups[role]) {
                // Kelompokkan project
                roleGroups[role].projects.push(p);

                // Kelompokkan task
                (p.tasks || []).forEach((t) => {
                    const taskRole = t.user?.role?.role?.toUpperCase() || "UNKNOWN";
                    if (roleGroups[taskRole]) roleGroups[taskRole].tasks.push({ ...t, project: p });
                });
            }
        });

        // 6. Generate Excel
        const workbook = new ExcelJS.Workbook();

        const dateFormatter = (date) => date ? new Date(date).toISOString().split("T")[0] : "-";

        // 🔹 Helper function buat tambah sheet Project
        const addProjectSheet = (sheetName, data) => {
            const sheet = workbook.addWorksheet(sheetName);
            sheet.addRow([
                "ID", "Project Name", "Assigned To", "Project Type", "Effort",
                "Req Date", "Plan Start", "Plan End", "Actual Start", "Actual End",
                "Go Live", "Progress", "Status", "Remark",
            ]);
            data.forEach((p) => {
                sheet.addRow([
                    p.id_project,
                    p.project_name,
                    p.user?.name || "-",
                    p.projectType?.project_type || "-",
                    p.level,
                    dateFormatter(p.req_date),
                    dateFormatter(p.plan_start_date),
                    dateFormatter(p.plan_end_date),
                    dateFormatter(p.actual_start),
                    dateFormatter(p.actual_end),
                    dateFormatter(p.live_date),
                    p.project_progress || 0,
                    p.status || "TO_DO",
                    p.remark || "-",
                ]);
            });
        };

        // 🔹 Helper function buat tambah sheet Task
        const addTaskSheet = (sheetName, data) => {
            const sheet = workbook.addWorksheet(sheetName);
            sheet.addRow([
                "Project ID", "Project Name", "Task ID", "Task Detail", "Assigned To",
                "Task Group", "Plan Start", "Plan End", "Actual Start", "Actual End",
                "Platform", "Progress", "Status",
            ]);
            data.forEach((t) => {
                sheet.addRow([
                    t.id_project,
                    t.project_name,
                    t.id_task,
                    t.task_detail || "-",
                    t.user?.name || "-",
                    t.group?.task_group || "-",
                    dateFormatter(t.plan_start_date),
                    dateFormatter(t.plan_end_date),
                    dateFormatter(t.actual_start),
                    dateFormatter(t.actual_end),
                    dateFormatter(t.live_date),
                    t.platform?.platform || "-",
                    t.task_progress || 0,
                    t.status || "TO_DO",
                ]);
            });
        };

        // 🔹 Tambahkan sheet per role
        addProjectSheet("Project_ITBP", roleGroups.ITBP.projects);
        addTaskSheet("Task_ITGA", roleGroups.ITGA.tasks);
        addProjectSheet("Project_SAP", roleGroups.SAP.projects);
        addTaskSheet("Task_SAP", roleGroups.SAP.tasks);
        addProjectSheet("Project_DATA_SCIENCE", roleGroups.DATA_SCIENCE.projects);
        addTaskSheet("Task_DATA_SCIENCE", roleGroups.DATA_SCIENCE.tasks);

        // 🔹 Kirim ke user
        const buffer = await workbook.xlsx.writeBuffer();
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader("Content-Disposition", "attachment; filename=projects_by_role.xlsx");
        res.send(buffer);
    } catch (err) {
        console.error("Download Excel error:", err);
        res.status(500).json({ msg: err.message });
    }
};