import { json, type ActionFunctionArgs } from "@remix-run/node";
import { verify_signature } from "~/lib/verifyWebhook";
import {
	addProject,
	hardDeleteProject,
	softDeleteProject,
	updateProject,
} from "~/services/database.server";
export async function action({ request }: ActionFunctionArgs) {
	const data = await request.json();
	if (!verify_signature(request, data)) {
		return json({ json: { error: "Unauthorized" } }, 401);
	}
	switch (data.action) {
		case "publicized":
			return addProject({
				...data.repository,
				homepage_url: data.repository.homepage,
				personalized_description: null,
				languages: [data.repository.language],
				created_at: data.repository.created_at,
				updated_at: data.repository.updated_at,
				active: true,
				image: null,
			});

		case "edited":
			return updateProject({
				id: data.repository.id,
				personalized_description: "",
				languages: [data.repository.language],
				description: data.changes.description,
				homepage_url: data.repository.homepage,
				html_url: data.repository.html_url,
				name: data.repository.name,
				updated_at: data.repository.updated_at,
				created_at: data.repository.created_at,
				active: true,
			});

		case "deleted":
			return hardDeleteProject(data.repository.id);

		case "privatized":
			return softDeleteProject(data.repository.id);

		default:
			console.log("Not set up: ", data.action);
			return null;
	}
}
