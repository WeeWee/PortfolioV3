import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import { Button } from "~/components/ui/button";
import { json, Link, useLoaderData } from "@remix-run/react";
import { getProjects } from "~/services/database.server";
import { ProjectCard } from "~/components/project-card";
import { CodeIcon, CodeXmlIcon } from "lucide-react";
import { Quote } from "~/components/quote";
import { useMediaQuery } from "react-responsive";
export const meta: MetaFunction = () => {
	const title = "Adam Kindberg Portfolio";
	const description =
		"Adam Kindberg's Portfolio website. 21-year old fullstack developer with a passion for learning, improving and open source. 4 years into my web development journey, learning everyday and loving what i do";
	const url = "https://new.adamkindberg.com";
	return [
		{
			title: title,
		},
		{ name: "description", content: "Adam Kindberg's Portfolio website" },
		{ property: "og:url", content: url },
		{ property: "og:type", content: "website" },
		{ name: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:image", content: `${url}/seo-image.png` },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:url", content: url },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: `${url}/seo-image.png` },
	];
};
export async function loader({ request }: LoaderFunctionArgs) {
	const projects = await getProjects(3);
	return json(projects, {
		headers: { "Cache-Control": "public, max-age=3600" },
	});
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
	return (
		<div className="space-y-4 md:space-y-16">
			<section className="grid md:grid-cols-2 gap-4">
				<section className="space-y-4 ">
					<Hero />
					<section className="flex flex-col items-center gap-4">
						<p className="max-w-[50ch] mx-auto ">
							<span className="font-bold">21-year old fullstack developer</span>{" "}
							with a passion for learning, improving and open source.{" "}
							<span className="font-bold">4 years </span> into my web
							development journey,{" "}
							<span className="font-bold">
								learning everyday and loving what i do.
							</span>
						</p>
						<div className="flex gap-4">
							<Link to="https://github.com/WeeWee" aria-label="Github">
								<svg
									aria-hidden="true"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 dark:text-foreground dark-hover:text-muted"
									aria-label="GitHub"
								>
									<path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
								</svg>
							</Link>
							<Link
								to="https://www.linkedin.com/in/adam-kindberg/"
								aria-label="LinkedIn"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className=" w-6 h-6 text-[#0a66c2] dark:text-foreground"
									focusable="false"
								>
									<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
								</svg>
							</Link>
						</div>

						<Button asChild variant={"secondary"} className="font-semibold">
							<Link to="/about">Read more</Link>
						</Button>
					</section>
				</section>
				<section>
					<img
						src="/sunset.webp"
						loading="lazy"
						className="w-full h-full md:block hidden object-cover max-h-96 rounded-md"
						alt="Sunset"
					/>
				</section>
			</section>

			<section className=" space-y-2 ">
				<h2 className="font-bold text-xl md:text-3xl text-center">
					Latest project(s)
				</h2>
				<div className="flex  items-center   gap-4">
					<CodeIcon className="h-5 w-5" aria-label="Opening Code" />
				</div>
				<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
					{projects?.map((project) => (
						<ProjectCard showcase key={project.id} project={project} />
					))}
				</div>
				<div className="flex justify-end">
					{" "}
					<CodeXmlIcon className="h-6 w-6" aria-label="Closing Code" />
				</div>
			</section>
			<section className="">
				<h3 className="font-bold text-xl md:text-3xl  mb-4 text-center">
					What People Say
				</h3>
				<div className="grid md:grid-cols-2 gap-4 ">
					{quotes.map((quote, index) => (
						<Quote key={index} {...quote} />
					))}
				</div>
			</section>
		</div>
	);
}
