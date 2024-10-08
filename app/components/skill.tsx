import { CrownIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "~/lib/utils";

export function Skill({ tech, i }: { tech: string; i: number }) {
	const topSkill = i === 0;
	return (
		<div className="group " key={tech}>
			<Card className="w-max">
				<CardContent
					className={cn(
						"text-xs  w-max group-odd:bg-muted/60 group-even:bg-background/20   font-semibold p-3 px-6 text-center rounded-md relative group dark:shadow-inner dark:shadow-primary/10",
						topSkill && "dark:text-[#c5af2f] font-bold"
					)}
				>
					<p>{tech} </p>
					{topSkill && (
						<CrownIcon className="w-4 h-4 absolute -top-1 -right-1 rotate-[25deg]  dark:animate-crown-dark animate-crown-light  transition " />
					)}
				</CardContent>
			</Card>
		</div>
	);
}
