export default function About() {
	return (
		<div>
			<section>
				<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">
					About me
				</h1>
				<div className="relative mt-8">
					<img
						src="/linkedin.jpg"
						className="w-32 h-32 md:w-64 md:h-64 lg:absolute top-0 left-0 rounded-lg z-[4] object-cover ring-2  ring-ring -rotate-12 lg:rotate-12"
					/>
					<img
						src="/sunset.jpg"
						className="hidden lg:block w-32 h-32 md:w-64 md:h-64 lg:absolute top-48 z-[3] -left-12 rounded-lg object-cover ring-2  ring-ring lg:-rotate-12 "
					/>
					<img
						src="/sunset.jpg"
						className="hidden lg:block w-32 h-32 md:w-64 md:h-64 lg:absolute top-32 z-[2] left-48 rounded-lg object-cover ring-2  ring-ring lg:rotate-12"
					/>
				</div>
			</section>
		</div>
	);
}
