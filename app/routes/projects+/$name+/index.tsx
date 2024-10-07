import { json, Link, useLoaderData } from "@remix-run/react";

import type { LoaderFunctionArgs } from "@remix-run/node";
import { getProject } from "~/services/database.server";
import { Separator } from "~/components/ui/separator";
import {
	ProjectCarousel,
	ProjectCarouselFallback,
} from "~/components/project-carousel";
import { ClientOnly } from "remix-utils/client-only";
import { Cog } from "lucide-react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
export async function loader({ request, params }: LoaderFunctionArgs) {
	const { name } = params;
	const project = await getProject(name);
	if (!project)
		throw new Response(null, { status: 404, statusText: "Not found" });
	return project;
}
export default function Project() {
	const project = useLoaderData<typeof loader>();

	return (
		<main className="space-y-4 md:space-y-8">
			<header>
				<hgroup>
					<h1 className="font-bold text-4xl capitalize">{project.name}</h1>
					<p className="text-sm">{project.description}</p>
				</hgroup>
				<Separator className="my-4" />
			</header>
			<section className="grid gap-4  md:grid-cols-2">
				{project.tech_stack && project.idea ? (
					<div className="space-y-2 order-2 md:order-1">
						<div>
							<h2 className="text-lg font-bold">The idea behind it</h2>
							<p className="text-sm">{project.idea}</p>
						</div>
						<div>
							<h3 className="text-lg font-bold">Tech stack</h3>
							<ul className="space-y-1">
								{project.tech_stack?.map((tech) => (
									<li key={tech} className=" list-item text-sm">
										{tech}
									</li>
								))}
							</ul>
						</div>
					</div>
				) : (
					<div className="space-y-2 order-2 md:order-1 max-w-[70ch]">
						<div>
							<div className="flex gap-2">
								<Cog className="w-6 h-6" />
								<h2 className="text-lg font-bold">Working on</h2>
							</div>
							<p className="text-sm">Currently working on this page.</p>
							<p className="text-sm">Here is some lorem ipsum.</p>
						</div>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
							similique culpa expedita minus rem harum provident officiis velit.
							Ullam nihil mollitia aut repudiandae neque necessitatibus qui,
							pariatur ipsam corporis magni iure assumenda, nam accusantium,
							consectetur porro cupiditate ducimus minima. Itaque iste molestias
							magni quas! Veritatis eligendi cumque minus, accusamus voluptatum
							error nulla repellendus aliquam, perspiciatis modi illo nemo
							eveniet perferendis sit id vero quasi! Molestias, recusandae
							nesciunt at alias itaque ipsam cumque quo consequuntur ducimus
							distinctio expedita veritatis commodi reprehenderit possimus
							laboriosam impedit quisquam vero labore maiores perspiciatis illum
							quos?
						</p>
					</div>
				)}
				{project.images && (
					<img
						src={project.images.at(0)}
						className="rounded-lg order-1 md:order-2"
						alt={`${project.name} preview`}
					/>
				)}
			</section>
			<section className=" hidden md:grid md:grid-cols-3 gap-4 ">
				{project.images?.map((image, i) => (
					<Card asChild key={image} className="overflow-hidden ">
						<figure>
							<CardContent className="p-4 pt-0">
								<img src={image} className="rounded-lg " />
							</CardContent>

							<figcaption className="p-4 pt-0">
								<p className="text-sm">Working on...</p>
							</figcaption>
						</figure>
					</Card>
				))}
			</section>
			<section className=" md:hidden">
				<ClientOnly fallback={<ProjectCarouselFallback />}>
					{() => <ProjectCarousel images={project.images} />}
				</ClientOnly>
			</section>
			<section className="flex flex-col gap-4">
				<h3 className="text-lg font-bold">Check it out!</h3>
				<div className="flex items-center justify-center gap-12">
					{project.homepage_url && (
						<Button asChild>
							<Link to={project.homepage_url}>Website💻</Link>
						</Button>
					)}
					{project.html_url && (
						<Button variant="secondary" asChild>
							<Link to={project.html_url}>Code &lt;/&gt; </Link>
						</Button>
					)}
				</div>
			</section>
		</main>
	);
}
