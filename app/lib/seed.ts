// src/seed.ts

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { Project, projects } from "./schema";
import { octokit } from "./octokit";

config({ path: ".env" });

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

async function seed() {
	const { data } = await octokit.rest.repos.listForUser({
		username: "WeeWee",
		type: "owner",
		sort: "updated",
	});
	await Promise.all(
		data.map(async (repo): Promise<Project | undefined> => {
			if (repo.name === "WeeWee") return;
			await db
				.insert(projects)
				.values({
					id: repo.id,
					name: repo.name,
					description: repo.description || "",
					html_url: repo.html_url,
					homepage_url: repo.homepage || "",
					languages: [repo.language!],
					personalized_description: "",
					active: true,
					created_at: repo.created_at!,
					updated_at: repo.updated_at || repo.created_at!,
				})
				.onConflictDoNothing()
				.returning();
		})
	);
}

async function main() {
	try {
		await seed();
		console.log("Seeding completed");
	} catch (error) {
		console.error("Error during seeding:", error);
		process.exit(1);
	}
}

main();
