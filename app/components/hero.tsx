import { MapPinIcon, CrownIcon, Crown, SparklesIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "@remix-run/react";
const skills = ["Remix.js", "Next.js", "TailwindCSS", "TypeScript"];
export function Hero() {
	return (
		<>
			<section className="items-center text-start flex flex-col">
				<div className="py-6 flex flex-col">
					<div className="flex justify-between">
						<p className="font-bold">Hi, im</p>
						<div className="flex gap-1 items-center text-sm ">
							<MapPinIcon className="w-4 h-4" />
							<Link
								to="https://maps.app.goo.gl/3Th3BpqCxTFFqcMc7"
								className="cursor-pointer"
							>
								Helsingborg, Sweden
							</Link>
						</div>
					</div>
					<h1 className="font-bold pt-1">
						<span className="text-5xl hover:text-blue-500  cursor-pointer md:text-6xl font-extrabold">
							Adam Kindberg
						</span>
					</h1>
				</div>
			</section>
			<section className=" w-full flex flex-col items-center gap-2 mt-4 justify-center ">
				<p className="text-sm font-bold ">Most proficient using</p>
				<div className="flex items-center flex-wrap ">
					{skills.map((tech, i) => (
						<div className="p-1 group " key={tech}>
							<Card>
								<CardContent className="text-xs group-odd:bg-muted font-semibold p-3 px-6 text-center rounded-md relative group ">
									<p>{tech}</p>
									{i === 0 && (
										<CrownIcon className="w-4 h-4 absolute -top-1 -right-1 rotate-[25deg] text-[#FFD700] group-hover:text-[#ffec00] group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5   ease-in-out  duration-150 transition " />
									)}
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
