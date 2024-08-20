import { Project } from "~/lib/schema";
import { Link, useLocation, useSearchParams } from "@remix-run/react";
import { ProjectModal } from "~/components/project-modal";
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
import { cn } from "~/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { ProjectTooltip } from "./project-tooltip";
export function ProjectCard({
	project,
	showcase = false,
}: {
	project: Project;
	showcase?: boolean;
}) {
	const [searchParams] = useSearchParams();
	const ref = useRef<HTMLDivElement>(null);
	const [isSelected, setIsSelected] = useState(false);
	const currentSelected = searchParams.get("selected");
	useEffect(() => {
		if (currentSelected === project.name && !showcase) {
			setIsSelected(true);
			ref.current?.scrollTo({ behavior: "smooth", top: -10 });
		} else {
			setIsSelected(false);
		}
	}, [currentSelected, project.name, showcase]);
	return (
		<Card
			key={project.id}
			ref={ref}
			className={cn(
				" snap-start flex flex-col",
				isSelected && "ring ring-ring "
			)}
		>
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
			<CardContent className="flex-1 flex-col flex justify-end">
				<p className="text-sm text-muted-foreground">
					{project.languages.join(", ")}
				</p>
			</CardContent>
			<CardFooter className="flex justify-between p-4 pt-0">
				{showcase ? (
					<>
						<Button variant="outline" asChild>
							<Link
								to={project.html_url}
								target="_blank"
								rel="noreferrer noopener"
							>
								Source code
							</Link>
						</Button>
						<ProjectTooltip project={project} />
					</>
				) : (
					<>
						<Button variant="outline" asChild>
							<Link
								to={project.html_url}
								target="_blank"
								rel="noreferrer noopener"
							>
								Source code
							</Link>
						</Button>

						<Button variant="link" asChild>
							<Link to={`/projects/${project.name}`}>Read more</Link>
						</Button>
					</>
				)}
			</CardFooter>
		</Card>
	);
}
