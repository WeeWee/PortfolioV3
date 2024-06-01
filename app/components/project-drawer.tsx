import { Project } from "~/lib/schema";
import { Button } from "./ui/button";
import {
	DrawerTrigger,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerFooter,
	DrawerClose,
	Drawer,
} from "./ui/drawer";

export function ProjectDrawer({ project }: { project: Project }) {
	const emojis = ["🚀", "🔥", "🌟", "💻"];
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="secondary">More information</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className=" pt-12 mx-auto w-full max-w-sm">
					<DrawerHeader className="pb-2 pt-4">
						<DrawerTitle className="  capitalize">{project.name}</DrawerTitle>
						{project.description && (
							<DrawerDescription>{project.description}</DrawerDescription>
						)}
					</DrawerHeader>
					<div className="py-2 p-4 pb-0">
						<p className="text-sm text-muted-foreground">
							{project.personalized_description}
						</p>
						<p>Languages</p>
						<p className="text-sm text-muted-foreground">
							{project.languages?.map(
								(language) =>
									`${language} ${
										emojis[Math.floor(Math.random() * emojis.length)]
									} `
							)}
						</p>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
