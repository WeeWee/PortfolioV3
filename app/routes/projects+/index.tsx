import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Projects as TProducts } from "~/lib/schema";
import { getProjects } from "~/services/database.server";
import { ProjectCard } from "~/components/project-card";
export async function loader({ request }: LoaderFunctionArgs) {
	const projects = await getProjects();

	return projects;
}
export default function Projects() {
	const projects = useLoaderData<TProducts>();
	return (
		<div className="">
			<h1 className="font-bold text-xl md:text-3xl  mb-4">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</div>
	);
}
