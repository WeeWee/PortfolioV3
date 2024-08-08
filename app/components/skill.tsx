import { CrownIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Skill({ tech, i }: { tech: string; i: number }) {
	return (
		<div className="group " key={tech}>
			<Card className="w-max">
				<CardContent className="text-xs w-max group-odd:bg-muted font-semibold p-3 px-6 text-center rounded-md relative group ">
					<p>{tech}</p>
					{i === 0 && (
						<CrownIcon className="w-4 h-4 absolute -top-1 -right-1 rotate-[25deg]  dark:animate-crown-dark animate-crown-light  transition " />
					)}
				</CardContent>
			</Card>
		</div>
	);
}
