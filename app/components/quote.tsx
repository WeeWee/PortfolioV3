import { Link } from "@remix-run/react";
import { QuoteIcon } from "lucide-react";

export function Quote({
	quote,
	name,
	image,
	role,
	link,
}: {
	name: string;
	role: string;
	quote: string;
	image: string;
	link: string;
}) {
	return (
		<figure className="mb-4">
			<QuoteIcon className="w-6 h-6 fill-current" />
			<blockquote className="max-w-[60ch]">
				<q className="text-sm md:text-base">{quote}</q>
				<p className="text-sm text-muted-foreground">
					NOTE: translated to English
				</p>
			</blockquote>
			<figcaption className="flex items-center justify-start gap-1 lg:gap-3 mt-4 ">
				<Link to={link} className="shrink-0">
					<img
						loading="lazy"
						className="h-8 w-8 rounded-full  object-cover"
						alt={`${name}`}
						src={image}
					/>
				</Link>
				<div className=" divide-muted divide-x-4   max-w-[50ch] md:max-w-none ">
					<cite className="font-medium pe-3">{name}</cite>
					<cite className="font-medium ps-3">{role}</cite>
				</div>
			</figcaption>
		</figure>
	);
}
