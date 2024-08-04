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
		if (currentSelected === project.name) {
			setIsSelected(true);
			ref.current?.scrollTo({ behavior: "smooth", top: -10 });
		}
	}, [currentSelected, searchParams]);
	return (
		<Card
			key={project.id}
			ref={ref}
			className={cn(" snap-start ", isSelected && "ring ring-ring ")}
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
			<CardContent className="p-4">
				<p className="text-sm text-muted-foreground">
					{project.languages &&
						project.languages.length > 0 &&
						`${project.languages[0]}...`}
				</p>
			</CardContent>
			<CardFooter className="flex justify-between p-4 pt-0">
				{showcase ? (
					<Button variant="outline" asChild>
						<Link to={`/projects?selected=${project.name}`}>More info</Link>
					</Button>
				) : (
					<>
						<Button variant="outline" asChild>
							<Link
								to={project.html_url}
								target="_blank"
								rel="noreferrer noopener"
							>
								Github Link
							</Link>
						</Button>
						<ProjectModal project={project} />
					</>
				)}
			</CardFooter>
		</Card>
	);
}
