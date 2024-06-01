import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	out: "./drizzle",
	schema: "./app/lib/schema.ts",
	dbCredentials: {
		url: process.env.NEON_DATABASE_URL!,
	},
});
