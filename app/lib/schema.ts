import { InferSelectModel } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
	id: integer("id").notNull().unique().primaryKey(),
	name: text("name").notNull().unique(),
	description: text("description"),
	languages: text("languages").array(),
	html_url: text("html_url").notNull(),
	personalized_description: text("personalized_description"),
	active: boolean("active").default(true),
	created_at: text("created_at"),
	updated_at: text("updated_at"),
	homepage_url: text("homepage_url"),
});
export type Project = InferSelectModel<typeof projects>;
export type Projects = Project[];
