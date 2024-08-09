import { MapPinIcon, CrownIcon, Crown, SparklesIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "@remix-run/react";
import { skills } from "~/routes/about";
import { Skill } from "./skill";

export function Hero() {
	return (
		<>
			<section className="items-center text-start flex flex-col">
				<div className="py-6 flex flex-col">
					<div className="flex justify-between">
						<p className="font-bold">Hi, im</p>
						<Link
							to="https://maps.app.goo.gl/3Th3BpqCxTFFqcMc7"
							rel="noreferrer noopener"
							target="_blank"
							className="flex cursor-pointer gap-1 items-center text-sm hover:text-blue-500  "
						>
							<MapPinIcon className="w-4 h-4 " />
							Helsingborg, Sweden
						</Link>
					</div>
					<h1 className="font-bold pt-1">
						<span className="text-5xl md:text-6xl font-extrabold">
							Adam Kindberg
						</span>
					</h1>
				</div>
			</section>
			<section className=" w-full flex flex-col items-center gap-2 mt-4 justify-center ">
				<p className="text-sm font-bold ">Most proficient using</p>
				<div className="flex items-center flex-wrap gap-2">
					{skills.slice(0, 4).map((tech, i) => (
						<Skill key={tech} tech={tech} i={i} />
					))}
				</div>
			</section>
		</>
	);
}
