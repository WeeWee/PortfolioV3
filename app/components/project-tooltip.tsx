import { Project } from "~/lib/schema";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
export function ProjectTooltip({ project }: { project: Project }) {
	const name = project.name.split("-").join(" ").replace("adam", "");
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="link" asChild>
						<Link to={`/projects/${project.name}`}>Read more</Link>
					</Button>
				</TooltipTrigger>
				<TooltipContent className="">
					<p>Information about project</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

/**
 * <div className=" flex flex-col items-center gap-4 min-h-32">
					<header>
						<h2 className="text-lg font-bold capitalize">
							{project.name.split("-").join(" ").replace("adam", "")}
						</h2>
					</header>
					<section className="flex flex-col justify-end flex-1 gap-4">
						<p className="text-sm ">{project.personalized_description}</p>
						{project.image && project.homepage_url ? (
							<Link
								to={project.homepage_url}
								aria-label={`${project.name}'s website`}
							>
								<img
									src={project.image}
									className="h-32 object-cover rounded-md"
									alt={`Preview ${project.name} of website`}
								/>
							</Link>
						) : project.image ? (
							<img
								src={project.image}
								className="h-32 object-cover rounded-md"
								alt={`Preview ${project.name} of website`}
							/>
						) : (
							project.homepage_url && (
								<Button asChild>
									<Link to={project.homepage_url}>Check out the website</Link>
								</Button>
							)
						)}
					</section>
				</div>
 */
