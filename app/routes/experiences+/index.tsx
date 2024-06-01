import dayjs from "dayjs";

export default function Experiences() {
	const experiences = [
		{
			name: "Software Developer",
			internship: true,
			company: "Gents.",
			startDate: "2024-01-08",
			endDate: "2024-05-24",
			description: [
				"Worked with creating a new frontend for GentsGo",
				"Learnt in-depth Next 13/14 app router.",
				"Stripe and Swish integration.",
				"Fundemental understanding of Laravel.",
			],
		},
		{
			name: "Software Developer",
			internship: true,
			company: "Brainforest.",
			startDate: "2023-04-10",
			endDate: "2023-04-05",
			description: [
				"A part of a team creating a website to improve SEO for Wordpress media library using AI.",
				"Improved communication skills with the team and the client. (client being the Brainforest)",
				"Gained experience working Agile.",
				"BFF (backend for frontend).",
				"Remix 1.14, Google Auth, GraphQL, Hasura.",
			],
		},
	];
	const academics = [
		{
			name: "Frontend Developer React",
			school: "Yrkeshögskolan Borås",
			startDate: "2022-09-20",
			endDate: "2024-06-14",
			description: [
				"Studies within frontend development.",
				"Courses within programming, database managment and backend development.",
				"Javascript, HTML, CSS, SASS, TailwindCSS, Typescript, NodeJS, Express, MongoDB, React, MySQL, NextJS, Postgresql, GraphQL, Git, Github, Agile, Scrum, Kanban, Wordpress, PHP, Figma, SEO, UX/UI",
			],
		},
		{
			name: "Game Development",
			school: "Ljud och bildskolan Helsingborg",
			startDate: "2019-08-19",
			endDate: "2022-06-10",
			description: [
				"Studies within game development.",
				"Courses within programming, algorithms and data structures.",
				"C#, C++, Unity, Unreal Engine, Blender, Photoshop, Maya",
			],
		},
	];
	return (
		<div className="">
			<h1 className="font-bold text-xl md:text-3xl  mb-4">
				Additional Experiences
			</h1>

			<ol className=" border border-s rounded-md">
				{experiences.map((experience) => (
					<li key={experience.company}>
						<div className="p-4 max-w-[75ch]">
							<h2 className="font-bold text-lg">{experience.name}</h2>
							<p className="text-sm text-muted-foreground">
								{experience.internship && "Internship at "}
								{experience.company}
							</p>
							<p className="text-sm text-muted-foreground mt-2">
								{dayjs(experience.startDate).format("DD/MM/YYYY")} -{" "}
								{dayjs(experience.endDate).format("DD/MM/YYYY")}
							</p>
							<div className="mt-2">
								{experience.description.map((desc) => (
									<p className="text-sm text-muted-foreground">{desc}</p>
								))}
							</div>
						</div>
					</li>
				))}
			</ol>
			<h1 className="font-bold text-xl md:text-3xl  mt-8 my-4">
				Academic Background
			</h1>

			<ol className=" border border-s rounded-md">
				{academics.map((academic) => (
					<li key={academic.school}>
						<div className="p-4 max-w-[75ch]">
							<h2 className="font-bold text-lg">{academic.name}</h2>
							<p className="text-sm text-muted-foreground">{academic.school}</p>
							<p className="text-sm text-muted-foreground mt-2">
								{dayjs(academic.startDate).format("DD/MM/YYYY")} -{" "}
								{dayjs(academic.endDate).format("DD/MM/YYYY")}
							</p>
							<div className="mt-2">
								{academic.description.map((desc) => (
									<p className="text-sm text-muted-foreground">{desc}</p>
								))}
							</div>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
