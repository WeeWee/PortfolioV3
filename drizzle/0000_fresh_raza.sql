CREATE TABLE IF NOT EXISTS "projects" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"languages" text[],
	"html_url" text NOT NULL,
	"personalized_description" text,
	"active" boolean DEFAULT true,
	CONSTRAINT "projects_id_unique" UNIQUE("id"),
	CONSTRAINT "projects_name_unique" UNIQUE("name")
);
