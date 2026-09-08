// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import ProjectCard from "@/components/layout/ProjectCard";
import ImageContainer from "@/components/layout/ImageContainer";
import SecondaryHeader from "@/components/layout/SecondaryHeader";
import PromptUserAlert from "@/components/assets/PromptUserAlert";
import CallToActionButton from "@/components/assets/CallToActionButton";
import TerminalCard from "@/components/layout/TerminalCard";

// data
import projects from "@/store/projects.mjs";

// images
import profilePic from "@/public/images/other/profile_pic.jpg";

// the hero transcript. Kept to three commands so the window stays shorter
// than the portrait beside it - the credentials are the part worth scanning.
const intro = [
	{
		command: "cat headline.txt",
		output: "I enjoy learning and working with new web technologies to transform ideas into real projects."
	},
	{
		command: "ls ~/credentials",
		output: [
			"Algonquin College — Web Development and Internet Applications Program",
			"Government of Canada Reliability security clearance",
			"CCNA — previously certified"
		]
	},
	{
		command: "ls ~/ships-with",
		output: "react   next.js   cloudflare   django   vercel   github ci/cd"
	}
];

export default function Home() {
	return (
		<>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 md:grid md:grid-cols-2 md:grid-rows-1 md:text-base lg:text-lg md:gap-x-8 md:gap-y-0 md:text-left">
				{/* mt-28 (112px) lines the top of the portrait up with the
				    top border of the terminal beside it: the label (20px),
				    the h1 (45px) and the two gap-y-6 gaps (48px) above it
				    come to 113px. Desktop only - mobile stacks instead. */}
				<div className="md:col-start-2 md:col-end-3 md:mt-28 md:self-start md:justify-self-center">
					<ImageContainer
						src={profilePic}
						alt="Paul McJannet in pink shirt with waterfall in background"
						title="Paul McJannet"
						borderColor="border-primary"
						priority
					/>
				</div>
				<div className="flex flex-col gap-y-6 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-between md:place-self-center">
					<p className="font-mono text-sm font-semibold text-secondary uppercase tracking-wider">
						{"// full-stack web developer"}
					</p>
					<PrimarySectionHeader title="Hi, I'm Paul!" />
					<TerminalCard
						path="~/paul"
						lines={intro}
					/>
					<div className="md:self-start">
						<PromptUserAlert />
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-y-8 text-left">
				<SecondaryHeader title="featured work" />
				<div className="grid gap-6 sm:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.slug}
							index={index}
							slug={project.slug}
							title={project.title}
							tagline={project.tagline}
							period={project.period}
							stack={project.stack}
							summary={project.summary}
						/>
					))}
				</div>
				<CallToActionButton href="/projects">
					{"./view-all-projects"}
				</CallToActionButton>
			</section>
		</>
	);
}
