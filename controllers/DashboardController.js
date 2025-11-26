import { db } from "../db.js";
import dotenv from "dotenv";
dotenv.config();

export const getDashboardProjects = async (req, res) => {
  try {
    const userRole = req.query.role?.toLowerCase() || "admin";
    const userName = req.query.name?.toLowerCase() || "";

    // ==========================
    // GET ALL PROJECTS + USER + ROLE
    // ==========================
    const projectQuery = `
      SELECT 
        p.*,
        u."name" AS itbp_name,
        r."role" AS itbp_role
      FROM "Project" p
      LEFT JOIN "User" u ON u."SAP" = p."assigned_to"
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
      ORDER BY p."plan_start_date" ASC
    `;
    const { rows: projects } = await db.query(projectQuery);

    // ==========================
    // GET ALL TASKS + USER + ROLE
    // ==========================
    const tasksQuery = `
      SELECT 
        t.*,
        u."name" AS task_user_name,
        r."role" AS task_user_role
      FROM "Task" t
      LEFT JOIN "User" u ON u."SAP" = t."assigned_to"
      LEFT JOIN "Role" r ON r."id_role" = u."role_id"
    `;
    const { rows: allTasks } = await db.query(tasksQuery);

    // Group tasks by project ID
    const groupTasks = {};
    allTasks.forEach((t) => {
      if (!groupTasks[t.id_project]) groupTasks[t.id_project] = [];
      groupTasks[t.id_project].push(t);
    });

    // ==========================
    // BUILD PROJECT SUMMARY
    // ==========================
    const projectsSummary = projects
      .filter((p) => {
        const projectTasks = groupTasks[p.id_project] || [];

        const projectAssigned =
          p.itbp_name?.toLowerCase() === userName;

        const hasAssignedTask = projectTasks.some(
          (t) => t.task_user_name?.toLowerCase() === userName
        );

        if (userRole === "itbp") return projectAssigned;
        if (userRole === "itga") return hasAssignedTask;
        if (["sap", "data_science"].includes(userRole))
          return projectAssigned || hasAssignedTask;

        return true;
      })
      .map((p) => {
        const projectTasks = groupTasks[p.id_project] || [];

        const filteredTasks =
          ["itga", "sap", "data_science"].includes(userRole)
            ? projectTasks.filter(
                (t) =>
                  t.task_user_name?.toLowerCase() === userName
              )
            : projectTasks;

        const totalTasks = filteredTasks.length;
        const completedTasks = filteredTasks.filter(
          (t) => t.status === "COMPLETED"
        ).length;

        const startedTasks = filteredTasks.filter((t) => t.actual_start);

        const actual_start =
          startedTasks.length > 0
            ? new Date(
                Math.min(
                  ...startedTasks.map((t) => new Date(t.actual_start))
                )
              )
            : null;

        const actual_end =
          completedTasks === totalTasks && totalTasks > 0
            ? filteredTasks.reduce((latest, t) => {
                const tDate = t.actual_end
                  ? new Date(t.actual_end)
                  : new Date(0);
                return tDate > new Date(latest) ? t.actual_end : latest;
              }, "1970-01-01")
            : null;

        const engineerNames = [
          ...new Set(
            projectTasks
              .map((t) => t.task_user_name?.toLowerCase())
              .filter(Boolean)
          ),
        ];

        return {
          id_project: p.id_project,
          project_name: p.project_name,
          plan_start_date: p.plan_start_date,
          plan_end_date: p.plan_end_date,
          actual_start,
          actual_end,
          task_todo: filteredTasks.filter((t) => t.status === "TO_DO")
            .length,
          task_inprogress: filteredTasks.filter(
            (t) => t.status === "IN_PROGRESS"
          ).length,
          task_completed: completedTasks,
          itbp_name: p.itbp_name?.toLowerCase() || null,
          itbp_role: p.itbp_role?.toLowerCase() || null,
          engineer_names: engineerNames,
          tasks: projectTasks.map((t) => ({
            id_task: t.id_task,
            task_detail: t.task_detail,
            status: t.status,
            assigned_to: t.task_user_name?.toLowerCase() || null,
            assigned_role: t.task_user_role?.toLowerCase() || null,
            plan_end_date: t.plan_end_date,
            actual_start: t.actual_start,
            actual_end: t.actual_end,
            isDelay: t.plan_end_date
              ? new Date(t.plan_end_date) < new Date()
              : false,
          })),
        };
      });

    // ==========================
    // REMINDER TASKS
    // ==========================
    let reminderTasks = [];
    if (["itga", "sap", "data_science"].includes(userRole)) {
      const now = new Date();
      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(now.getDate() + 7);

      const reminderQuery = `
        SELECT 
          t.*, 
          p."project_name"
        FROM "Task" t
        LEFT JOIN "User" u ON u."SAP" = t."assigned_to"
        LEFT JOIN "Project" p ON p."id_project" = t."id_project"
        WHERE LOWER(u."name") = $1
          AND t.status IN ('TO_DO','IN_PROGRESS')
          AND (
            (t."plan_end_date" BETWEEN $2 AND $3)
            OR (t."plan_end_date" < $2)
          )
        ORDER BY t."plan_end_date" ASC
      `;

      const { rows } = await db.query(reminderQuery, [
        userName,
        now,
        sevenDaysLater,
      ]);

      reminderTasks = rows.map((t) => ({
        id_task: t.id_task,
        task_detail: t.task_detail,
        project_name: t.project_name,
        status: t.status,
        plan_end_date: t.plan_end_date,
        isDelay: t.plan_end_date ? new Date(t.plan_end_date) < now : false,
      }));
    }

    // ==========================
    // RESPONSE
    // ==========================
    res.status(200).json({
      projectsSummary,
      reminderTasks,
    });
  } catch (err) {
    console.error("Error getDashboardProjects:", err);
    res.status(500).json({ msg: err.message });
  }
};
