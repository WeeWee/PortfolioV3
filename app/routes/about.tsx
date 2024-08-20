import { CrownIcon } from "lucide-react";
import { Skill } from "~/components/skill";
import { Card, CardContent } from "~/components/ui/card";

export const skills = [
	"Remix JS",
	"Next JS",
	"TailwindCSS",
	"TypeScript",
	"HTML/CSS",
	"JavaScript",
	"SASS",
	"GraphQL",
	"SQL",
	"Hasura",
	"Backend",
	"REST",
	"CRUD",
	"i18n",
	"Prismic CMS",
	"Agile Development",
	"PHP",
	"Figma",
	"MongoDB",
	"Gitlab",
	"Github",
];
export default function About() {
	return (
		<main>
			<section className="grid md:grid-cols-2 gap-4 md:gap-8">
				<div className="relative mt-8 flex-1">
					<img
						src="/profile-picture.png"
						className="w-32 h-32 md:w-48 md:h-48 lg:w-64  lg:h-64 lg:absolute top-0 left-0 rounded-lg z-[4] object-cover ring-2  ring-ring -rotate-12 lg:rotate-12"
					/>
					<img
						src="/sunset.webp"
						className=" inset-0 mx-auto lg:m-0 rotate-12 lg:block w-32 h-32  lg:w-64 md:w-48 md:h-48 lg:h-64 absolute lg:top-48 -z-[1] lg:z-[3] lg:-left-12 rounded-lg object-cover ring-2  ring-ring lg:-rotate-12 "
					/>
					<img
						src="/sunset.webp"
						className="hidden lg:block w-32 h-32  lg:w-64 md:w-48 md:h-48 lg:h-64 lg:absolute top-32 z-[2] left-48 rounded-lg object-cover ring-2  ring-ring lg:rotate-12"
					/>
				</div>
				<div className="w-full md:shrink-0 flex-1 md:grow flex flex-col gap-4">
					<section>
						<h1 className="font-bold text-xl md:text-2xl">Adam Kindberg</h1>
						<p className="text-xs md:text-sm text-muted-foreground">About me</p>
					</section>
					<section className="space-y-2">
						<Card className="w-max">
							<CardContent className=" bg-muted font-bold text-sm tracking-tight p-3 px-6 text-center rounded-md w-max ">
								<h3>Introduction</h3>
							</CardContent>
						</Card>

						<p className="max-w-[75] text-sm">
							<span className="font-bold">A developer from the ground up.</span>{" "}
							Always intrigued by how new technologies and techniques work. The
							first notable milestone was beginning the studies at{" "}
							<span className="font-bold">LBS high school</span>, focusing on
							game programming. This educational path provided insights into
							programming, game structures, and the underlying mathematics.
							During my studies, my focus transitioned from game development to{" "}
							<span className="font-bold">web development</span>, and I
							dedicated my spare time to mastering it.
						</p>
						<p className="max-w-[75] text-sm">
							<span className="font-bold tracking-tight">
								Why Web development ?
							</span>{" "}
							<br />
							Web development allows me to reach a broad audience while blending{" "}
							<span className="font-bold">
								frontend, backend, and design
							</span>{" "}
							skills. I enjoy designing and creating{" "}
							<span className="font-bold">user-friendly</span> applications, but
							I also find the technical challenges of{" "}
							<span className="font-bold">backend development</span> compelling.
							The variety of directions you can take in this field really
							excites me. I recently graduated from{" "}
							<span className="font-bold">Borås Yrkeshögskola</span> June 2024.
							The education brought me new knowledge and learning opportunities,
							not only in web development, but also experiencing{" "}
							<span className="font-bold">professional work</span> environment
							at <span className="font-bold">Gents</span> and{" "}
							<span className="font-bold">Brainforest</span>.
						</p>
					</section>
					<section className="space-y-2">
						<Card className="w-max">
							<CardContent className=" font-bold tracking-tight text-sm p-3 px-6 text-center rounded-md w-max ">
								<h3>Personality & What I Enjoy</h3>
							</CardContent>
						</Card>
						<p className="max-w-[75] text-sm">
							I am a <span className="font-bold">passionate</span>,{" "}
							<span className="font-bold">positive</span> and{" "}
							<span className="font-bold">energetic</span> 21 year old{" "}
							<span className="font-bold">fullstack developer</span> proficient
							in React, <br />
							dedicated to learning new technologies and expanding my knowledge.
						</p>
						<p className="max-w-[75] text-sm">
							During my free time i enjoy spending time with my family and
							friends. I also enjoy playing video games, everything from MOBA,
							FPS to car games. I recently upgraded my racing simulator so thats
							where i spend most my time. I am a very social person and enjoy
							meeting new people and making new friends.
						</p>
					</section>
					<section className="space-y-2">
						<Card className="w-max">
							<CardContent className=" font-bold tracking-tight text-sm p-3 px-6 text-center rounded-md w-max ">
								<h3>Skills</h3>
							</CardContent>
						</Card>
						<div className="flex flex-wrap gap-2">
							{skills.map((tech, i) => (
								<Skill key={tech} tech={tech} i={i} />
							))}
						</div>
					</section>
				</div>
			</section>
		</main>
	);
}
