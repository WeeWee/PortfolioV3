import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { ProjectDrawer } from "~/components/project-drawer";
import { Button } from "~/components/ui/button";
import dayjs from "dayjs";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "~/components/ui/card";
import { Projects as TProducts } from "~/lib/schema";
import { getProjects } from "~/services/database.server";
export async function loader({ request }: LoaderFunctionArgs) {
	const projects = await getProjects();

	return projects;
}
export default function Projects() {
	const projects = useLoaderData<TProducts>();
	return (
		<div className="">
			<h1 className="font-bold text-xl md:text-3xl  mb-4">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project) => (
					<Card key={project.id}>
						<CardHeader>
							<CardTitle className="font-bold text-lg capitalize">
								{project.name.split("-").join(" ").replace("adam", "")}
							</CardTitle>
							<CardDescription className="text-xs">
								{dayjs(project.updated_at).format("ddd, DD MMM YYYY")}
							</CardDescription>
							{project.description && (
								<CardDescription>{project.description}</CardDescription>
							)}
						</CardHeader>
						<CardContent className="p-4">
							<p className="text-sm text-muted-foreground">
								{project.languages &&
									project.languages.length > 0 &&
									`${project.languages[0]}...`}
							</p>
						</CardContent>
						<CardFooter className="flex justify-between p-4 pt-0">
							<Button variant="outline" asChild>
								<Link
									to={project.html_url}
									target="_blank"
									rel="noreferrer noopener"
								>
									Github Link
								</Link>
							</Button>

							<ProjectDrawer project={project} />
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
