import { Octokit } from "octokit";
import { db } from "~/services/database.server";
import { projects } from "./schema";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { config } from "dotenv";

config({ path: ".env" });
const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});
const seedDatabase = async () => {
	try {
		console.log("Creating Client...");
		const client = createClient({
			url: process.env.TURSO_CONNECTION_URL!,
			authToken: process.env.TURSO_AUTH_TOKEN!,
		});
		const db = drizzle(client, { schema: { projects } });
		console.log("Seeding...");
		console.log("Fetching Repositories...");
		const { data } = await octokit.rest.repos.listForUser({
			username: "WeeWee",
		});
		console.log("Looping through Repositories...");
		await Promise.all(
			data.map(async (repo) => {
				const { data: languages } = await octokit.rest.repos.listLanguages({
					repo: repo.name,
					owner: repo.owner.login,
				});
				const languagesArray = Object.keys(languages);
				await db
					.insert(projects)
					.values({
						...repo,
						homepage_url: repo.homepage!,
						idea: null,
						tech_stack: null,
						languages: languagesArray,
						created_at: repo.created_at!,
						updated_at: repo.updated_at!,
						active: !repo.private,
					})
					.onConflictDoNothing({ target: projects.id })
					.returning({ id: projects.id });
			})
		);
		console.log("Seeding Done!!");
	} catch (err) {
		console.log(err);
	}
};

void seedDatabase();
