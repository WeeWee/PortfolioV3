import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import { Card, CardContent } from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel";
import { ClientOnly } from "remix-utils/client-only";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Button } from "~/components/ui/button";
import { json, Link, useLoaderData } from "@remix-run/react";
import { getProjects } from "~/services/database.server";
import { ProjectCard } from "~/components/project-card";
import { BracesIcon, CodeIcon, CodeXmlIcon } from "lucide-react";
import { Quote } from "~/components/quote";
import { useMediaQuery } from "~/lib/hooks/useMediaQuery";
import { Separator } from "~/components/ui/separator";
export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};
export async function loader({ request }: LoaderFunctionArgs) {
	const projects = await getProjects(3);
	return projects;
}
const quotes = [
	{
		name: "Tobias K.",
		role: "Cheif Technical Officer at Gents",
		image: "/tobias.jpg",
		quote:
			"Adam demonstrates remarkable positivity and self-motivation, consistently arriving at the office with a smile. His keen interest in coding and adeptness at problem-solving are noteworthy, particularly given his youth. He possesses a strong foundation in development and exhibits a clear eagerness to expand his skills further.",
		link: "https://www.linkedin.com/in/tobias-korsb%C3%A4ck-60955265/",
	},
	{
		name: "Niklas Mårdby.",
		role: "Senior Educational Consultant & Full stack developer",
		image: "/niklas.jpg",
		quote:
			"I endorse Adam for his versatility as a full stack developer with a keen eye for design. He produces quality code and demonstrates a solid grasp of contemporary technologies, frameworks, and methodologies. Furthermore, he exudes warmth and charm, making him a delightful presence with his affable demeanor and strong social acumen.",
		link: "https://www.linkedin.com/in/mardby/",
	},
];
export default function Index() {
	const projects = useLoaderData<typeof loader>();

	const isDesktop = useMediaQuery("(min-width: 1024px)");
	return (
		<div className="space-y-4 md:space-y-16">
			<section className="grid md:grid-cols-2">
				<section className="space-y-4 ">
					<Hero />
					<section className="flex flex-col items-center gap-4">
						<p className="max-w-[50ch] mx-auto ">
							<span className="font-bold">21-year old fullstack developer</span>{" "}
							with a passion for learning and improving.{" "}
							<span className="font-bold">4 years </span> into my web
							development journey,
							<br />
							<span className="font-bold">
								learning everyday and loving what i do.
							</span>
						</p>
						<Button asChild variant={"secondary"} className="font-semibold">
							<Link to="/about">Read more</Link>
						</Button>
					</section>
				</section>
				<section>
					<img
						src="/sunset.jpg"
						className="w-full h-full md:block hidden object-cover max-h-96 rounded-md"
					/>
				</section>
			</section>

			<section className=" space-y-2 ">
				<h1 className="font-bold text-xl md:text-3xl text-center">
					Latest project(s)
				</h1>
				<div className="flex  items-center   gap-4">
					<CodeIcon className="h-5 w-5" />
				</div>
				<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
					{isDesktop
						? projects?.map((project) => (
								<ProjectCard showcase key={project.id} project={project} />
						  ))
						: projects?.length > 0 && (
								<ProjectCard
									showcase
									key={projects.at(0)?.id}
									project={projects.at(0)!}
								/>
						  )}
				</div>
				<div className="flex justify-end">
					{" "}
					<CodeXmlIcon className="h-6 w-6" />
				</div>
			</section>
			<section className="">
				<h1 className="font-bold text-xl md:text-3xl  mb-4 text-center">
					What People Say
				</h1>
				<div className="grid md:grid-cols-2 gap-4 ">
					{quotes.map((quote, index) => (
						<Quote key={index} {...quote} />
					))}
				</div>
			</section>
		</div>
	);
}
