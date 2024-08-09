CREATE TABLE `projects` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`description` text,
	`languages` text NOT NULL,
	`html_url` text NOT NULL,
	`personalized_description` text,
	`active` integer DEFAULT true,
	`created_at` text,
	`updated_at` text,
	`homepage_url` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `projects_id_unique` ON `projects` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `projects_name_unique` ON `projects` (`name`);