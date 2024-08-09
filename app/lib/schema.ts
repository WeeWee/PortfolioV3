import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
	id: integer("id").notNull().unique().primaryKey(),
	name: text("name").notNull().unique(),
	image: text("image"),
	description: text("description"),
	languages: text("languages", { mode: "json" }).notNull().$type<string[]>(),
	html_url: text("html_url").notNull(),
	personalized_description: text("personalized_description"),
	active: integer("active", { mode: "boolean" }).default(true),
	created_at: text("created_at"),
	updated_at: text("updated_at"),
	homepage_url: text("homepage_url"),
});
export type Project = typeof projects.$inferSelect;
export type Projects = Project[];
