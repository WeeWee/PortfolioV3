import { neon } from "@neondatabase/serverless";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { octokit } from "~/lib/octokit";
import { Project, projects } from "~/lib/schema";
const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle(sql);
export const getProjects = async () => {
	return (
		await db.select().from(projects).where(eq(projects.active, true))
	).sort(
		(a, b) =>
			new Date(b.updated_at!).getTime() - new Date(a.updated_at!).getTime()
	);
};

export const addProject = async (project: Project) => {
	const createdProject = await db
		.insert(projects)
		.values(project)
		.onConflictDoNothing()
		.returning();
	return createdProject.at(0);
};

export const updateProject = async (project: Project) => {
	return db
		.update(projects)
		.set({
			languages: project.languages,
			description: project.description,
			active: project.active,
			updated_at: project.updated_at,
		})
		.where(eq(projects.id, project.id));
};
export const softDeleteProject = async (id: number) => {
	return db.update(projects).set({ active: false }).where(eq(projects.id, id));
};
export const hardDeleteProject = async (id: number) => {
	return db.delete(projects).where(eq(projects.id, id));
};
