export function Hero() {
	return (
		<>
			<section className=" items-center text-start flex flex-col">
				<h1 className="font-bold text-xl md:text-3xl flex flex-col py-6">
					<span>Hi, im</span>{" "}
					<span className="text-5xl bg-clip-text text-transparent  hover:bg-blue-500  bg-foreground  duration-300 transition-colors ease-in-out cursor-pointer md:text-6xl font-extrabold font-mono">
						Adam Kindberg
					</span>
				</h1>
			</section>
			<section className="flex   justify-center items-center">
				<p className="max-w-[50ch]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
					veritatis dolore aspernatur, obcaecati, excepturi aut corrupti vitae
					molestias debitis natus ullam. Voluptatum pariatur consequatur dolorem
					similique adipisci labore perspiciatis consectetur.
				</p>
			</section>
		</>
	);
}
