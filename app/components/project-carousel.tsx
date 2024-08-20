import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";
export function ProjectCarousel({ images }: { images: string[] | null }) {
	if (!images) return <></>;
	return (
		<Carousel opts={{ align: "center", loop: true }} className="w-full ">
			<CarouselContent className="p-8">
				{images?.map((image, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden">
									<img
										src={"/seo-image.png"}
										className="object-cover w-full h-full rounded-lg "
										alt={image}
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export function ProjectCarouselFallback() {
	return (
		<div className="w-full">
			<div className="p-1">
				<Card>
					<CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden"></CardContent>
				</Card>
			</div>
		</div>
	);
}
