import { createClient } from "@libsql/client";
import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import { Project, projects } from "~/lib/schema";

const client = createClient({
	url: process.env.TURSO_CONNECTION_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN!,
});
export const db = drizzle(client, { schema: { projects } });
export const getProjects = async (length: number = 0) => {
	return (
		await db
			.select()
			.from(projects)
			.where(eq(projects.active, true))
			.orderBy(desc(projects.updated_at))
			.limit(length)
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

export const updateProject = async (project: Omit<Project, "image">) => {
	return db
		.update(projects)
		.set({
			languages: project.languages,
			description: project.description,
			active: project.active,
			updated_at: project.updated_at,
			homepage_url: project.homepage_url,
		})
		.where(eq(projects.id, project.id));
};
export const softDeleteProject = async (id: number) => {
	return db.update(projects).set({ active: false }).where(eq(projects.id, id));
};
export const hardDeleteProject = async (id: number) => {
	return db.delete(projects).where(eq(projects.id, id));
};
