import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import { Card, CardContent } from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "~/components/ui/carousel";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const quotes = [
		{
			author: "Tobias CTO Gents",
			quote:
				"Adam är en otroligt positiv och självgående person som alltid kommer till kontoret med ett leende. Hans nyfikenhet för kod och förmåga att hitta lösningar självständigt är imponerande, särskilt med tanke på hans unga ålder. Han har redan gedigna kunskaper inom utveckling och visar tydligt att han vill lära sig mer.",
		},
		{
			author: "Tobias CTO Gents",
			quote:
				"Adam är en otroligt positiv och självgående person som alltid kommer till kontoret med ett leende. Hans nyfikenhet för kod och förmåga att hitta lösningar självständigt är imponerande, särskilt med tanke på hans unga ålder. Han har redan gedigna kunskaper inom utveckling och visar tydligt att han vill lära sig mer.",
		},
		{
			author: "Tobias CTO Gents",
			quote:
				"Adam är en otroligt positiv och självgående person som alltid kommer till kontoret med ett leende. Hans nyfikenhet för kod och förmåga att hitta lösningar självständigt är imponerande, särskilt med tanke på hans unga ålder. Han har redan gedigna kunskaper inom utveckling och visar tydligt att han vill lära sig mer.",
		},
		{
			author: "Tobias CTO Gents",
			quote:
				"Adam är en otroligt positiv och självgående person som alltid kommer till kontoret med ett leende. Hans nyfikenhet för kod och förmåga att hitta lösningar självständigt är imponerande, särskilt med tanke på hans unga ålder. Han har redan gedigna kunskaper inom utveckling och visar tydligt att han vill lära sig mer.",
		},
		{
			author: "Tobias CTO Gents",
			quote:
				"Adam är en otroligt positiv och självgående person som alltid kommer till kontoret med ett leende. Hans nyfikenhet för kod och förmåga att hitta lösningar självständigt är imponerande, särskilt med tanke på hans unga ålder. Han har redan gedigna kunskaper inom utveckling och visar tydligt att han vill lära sig mer.",
		},
	];
	return (
		<div className="">
			<Hero />
			<section>Skills</section>
			<section>Projects</section>
			<section>
				<h1 className="font-bold text-xl md:text-3xl  mb-4">
					Words from references
				</h1>
				<Carousel
					className=" cursor-pointer select-none"
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{quotes.map(({ quote, author }) => (
							<CarouselItem
								key={author}
								className="md:basis-1/2 lg:basis-1/3 p-4"
							>
								<div className="p-1">
									<Card>
										<CardContent className="p-6">
											<q className="text-sm max-w-[50ch] block">{quote}</q>
											<p className="font-bold">- {author}</p>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className="grid grid-cols-1 md:grid-cols-3 w-fit gap-4 mx-auto"></div>
			</section>
		</div>
	);
}
