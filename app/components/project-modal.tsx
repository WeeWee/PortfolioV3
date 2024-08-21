import { Project } from "~/lib/schema";
import { Button } from "./ui/button";
import {
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
	Dialog,
} from "./ui/dialog";
import { Link } from "@remix-run/react";

export function ProjectModal({ project }: { project: Project }) {
	const emojis = ["🚀", "🔥", "🌟", "💻"];
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary">More information</Button>
			</DialogTrigger>
			<DialogContent>
				<div className=" mx-auto w-full max-w-sm">
					{project.image && (
						<img src={project.image} alt={`${project.name} website`} />
					)}
					<DialogFooter className=" sm:justify-between gap-2 flex-col">
						{project.homepage_url && (
							<Button asChild variant="secondary">
								<Link
									to={project.homepage_url}
									rel="noreferrer"
									target="_blank"
								>
									Check out website
								</Link>
							</Button>
						)}
						<DialogClose asChild>
							<Button variant="outline">Close</Button>
						</DialogClose>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	);
}
