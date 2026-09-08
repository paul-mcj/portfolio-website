// components
import ImageSlideshow from "@/components/layout/ImageSlideshow";
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import Badge from "@/components/assets/Badge";
import CallToActionButton from "@/components/assets/CallToActionButton";
import SecondaryHeader from "@/components/layout/SecondaryHeader";
import TerminalCard from "@/components/layout/TerminalCard";
import Reveal from "@/components/layout/Reveal";

// next
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHockeyPuck,
	faHeadphones,
	faBaseball,
	faGolfBallTee,
	faGamepad,
	faUtensils,
	faMasksTheater,
	faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";

// seo
import { SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

// grouped rather than a single flat wall of badges - the grouping is the
// signal, since it shows which layer of the stack each tool belongs to.
const stackGroups = [
	{
		title: "languages",
		items: ["html", "css", "javascript", "typescript", "python"]
	},
	{
		title: "frontend",
		items: ["react", "next.js", "tailwindcss", "vite"]
	},
	{
		title: "backend & data",
		items: ["node.js", "django", "postgresql", "rest api"]
	},
	{
		title: "tooling & platforms",
		items: ["cloudflare", "git", "vitest", "tensorflow"]
	}
];

// strictly the non-work ones. Python and machine learning used to live here
// too, which flattened both halves - they belong in the stack and the prose.
const interests = [
	{ icon: faHockeyPuck, label: "Hockey" },
	{ icon: faBaseball, label: "Baseball" },
	{ icon: faGolfBallTee, label: "Golf" },
	{ icon: faGamepad, label: "Video Games" },
	{ icon: faWizardsOfTheCoast, label: "Magic: the Gathering" },
	{ icon: faUtensils, label: "Cooking" },
	{ icon: faMasksTheater, label: "Comedy" },
	{ icon: faBookOpen, label: "Reading" },
	{ icon: faHeadphones, label: "Music" }
];

// the shell block in the hero - every line here is a real fact
const whoami = [
	{ command: "whoami", output: "paul-mcjannet" },
	{ command: "pwd", output: "~/location/ontario/canada" },
	{
		command: "cat role.txt",
		output: "founder & lead developer of Volinix Studio"
	},
	{
		command: "ls ~/stack",
		output: "next.js  typescript  cloudflare  python"
	}
];

// the arc, not a résumé - each entry marks something that changed. Dates for
// the early projects are anchored to when those repos were actually created.
const timeline = [
	{
		year: "2021",
		title: "CCNA certified",
		body: "Two years of evenings spent learning how networks actually work, ending in the CCNA exam. I went in expecting to build a career in IT and came out realising I found the web far more interesting. I wanted to build the things that ran on the application layer, not just keep the network running."
	},
	{
		year: "2021",
		title: "First projects shipped",
		body: "Started with HTML, CSS and vanilla JavaScript. Built a few simple online apps like a music player and a crypto price calculator. Coming from networking meant I understood what was happening under the hood when making HTTP requests across a network."
	},
	{
		year: "2022",
		title: "Moved onto React",
		body: "Outgrew vanilla JavaScript and started learning how to build around components and state. A small e-commerce cart app was the first thing I made where the architecture mattered more than the syntax."
	},
	{
		year: "2023",
		title: "Took on more complex problems",
		body: "Worked through Udemy classes, YouTube courses and a lot of documentation to get past tutorial-level work, then went looking for projects that would challenege me. I built a React Native mobile app and a maze game controlled entirely by a browser-side speech model."
	},
	{
		year: "2024",
		title: "Went back to school",
		body: "Enrolled at Algonquin College in the Web Development and Internet Applications program to reinforce my understanding of the fundamentals and expand my understanding on concepts like end-to-end application development, database design, network security and modern architecture standards."
	},
	{
		year: "2025",
		title: "Founded Volinix Studio",
		body: "Started the studio to build fast, accessible sites for small businesses across Ontario. Learnt about the ongoing importance of SEO, and how to work with a growing list of repos on Github."
	},
	{
		year: "2026",
		title: "Expanded into AI voice",
		body: "Began building voice agents that answer the phone and book real work for service businesses. Taught me how to use AI responsibly, how to build on serverless infrastructures, and why building a multi-tenant architecture from the start is necessary for future expansion."
	}
];

const description =
	"Learn more about Paul McJannet, founder of Volinix Studio and web developer working with JavaScript, React, Next.js and Python, based in Ontario, Canada.";

export const metadata = {
	title: "About",
	description,
	alternates: { canonical: "/about" },
	openGraph: {
		type: "website",
		url: "/about",
		siteName: SITE_NAME,
		title: "About Paul McJannet",
		description,
		locale: "en_CA",
		images: [defaultOpenGraphImage]
	},
	twitter: {
		card: "summary_large_image",
		title: "About Paul McJannet",
		description,
		images: [defaultOpenGraphImage.url]
	}
};

const AboutPage = () => {
	return (
		<>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 md:grid md:grid-cols-2 md:grid-rows-1 md:text-base lg:text-lg md:gap-x-8 md:gap-y-0 md:text-left">
				{/* mt-28 (112px) lines the top of the photo up with the top
				    border of the terminal beside it: the label (20px), the
				    h1 (45px) and the two gap-y-6 gaps (48px) above it come
				    to 113px. Desktop only - mobile stacks instead. */}
				<div className="md:col-start-2 md:col-end-3 md:mt-28 md:self-start md:justify-self-center">
					<ImageSlideshow />
				</div>
				<div className="flex flex-col gap-y-6 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-center">
					<p className="font-mono text-sm font-semibold text-secondary uppercase tracking-wider">
						{"// about me"}
					</p>
					<PrimarySectionHeader title="About Me" />
					<TerminalCard
						path="~/paul/about"
						lines={whoami}
					/>
					<p className="md:mt-8 text-muted">
						<span className="font-bold text-lg">
							Hi, I&apos;m Paul!
						</span>{" "}
						I am the founder and lead developer of{" "}
						<Link
							href="https://www.volinix.ca"
							className="underline font-bold text-primary">
							Volinix Studio
						</Link>
						, an Ontario-based company offering web design,
						SEO and content care for small local businesses.
					</p>
					<p className="text-muted">
						Most of what I build on the front end is Next.js,
						deployed to Cloudflare Workers at the edge. AI
						voice is what has caught my attention most
						recently. I&apos;m frequently tinkering with my
						agents on Vapi and am always looking to refine how
						they work.
					</p>
				</div>
			</section>

			<div className="flex flex-col gap-y-10 md:gap-y-14">
				<section className="flex flex-col gap-y-6">
					<SecondaryHeader title="currently" />
					<ul className="grid gap-4 sm:grid-cols-3">
						{[
							{
								label: "building",
								body: "AI voice agents that answer the phone and book work for service businesses."
							},
							{
								label: "learning",
								body: "How to build effective CI/CD Github Actions for template repos on Github."
							},
							{
								label: "based in",
								body: "Ottawa and Sudbury. Working with clients in person and remotely."
							}
						].map(({ label, body }, index) => (
							<Reveal
								as="li"
								key={label}
								delay={index * 60}
								className="flex flex-col gap-2 rounded-lg border border-line bg-surface p-5">
								<span className="font-mono text-xs uppercase tracking-wider text-primary">
									{label}
								</span>
								<span className="text-sm text-muted">
									{body}
								</span>
							</Reveal>
						))}
					</ul>
				</section>

				<section className="flex flex-col gap-y-6">
					<SecondaryHeader title="how i got here" />
					<ol className="flex flex-col">
						{timeline.map(({ year, title, body }, index) => (
							// no per-entry delay: the timeline is read top to
							// bottom, so each row reveals as it is reached
							<Reveal
								as="li"
								key={`${year}-${title}`}
								className="flex gap-4 sm:gap-6">
								{/* the rail: a dot per entry, with a
								    connecting line on all but the last */}
								<div
									aria-hidden="true"
									className="flex flex-col items-center pt-1.5">
									<span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
									{index < timeline.length - 1 && (
										<span className="w-px flex-1 bg-line" />
									)}
								</div>
								<div className="flex flex-col gap-1 pb-8">
									<span className="font-mono text-xs text-primary">
										{year}
									</span>
									<h3 className="font-mono text-base font-bold text-heading">
										{title}
									</h3>
									<p className="text-sm text-muted">
										{body}
									</p>
								</div>
							</Reveal>
						))}
					</ol>
				</section>

				<section className="flex flex-col gap-y-6">
					<SecondaryHeader title="tech stack" />
					<div className="flex flex-col gap-6">
						{stackGroups.map(({ title, items }, index) => (
							<Reveal
								key={title}
								delay={index * 60}
								className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
								<h3 className="w-full shrink-0 font-mono text-xs uppercase tracking-wider text-faint sm:w-44">
									{title}
								</h3>
								<ul className="flex flex-wrap gap-2">
									{items.map((item) => (
										<li key={item}>
											<Badge title={item} />
										</li>
									))}
								</ul>
							</Reveal>
						))}
					</div>
				</section>

				<section className="flex flex-col gap-y-6">
					<SecondaryHeader title="away from the keyboard" />
					<ul className="flex flex-wrap gap-2 text-muted">
						{interests.map(({ icon, label }) => (
							<li
								key={label}
								className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
								<span className="text-cyan transition-colors duration-200 group-hover:text-background">
									<FontAwesomeIcon
										icon={icon}
										className="w-4 h-4"
									/>
								</span>
								{label}
							</li>
						))}
					</ul>
				</section>

				<section className="flex flex-col gap-y-8 items-start">
					<CallToActionButton href="/contact">
						./get-in-touch
					</CallToActionButton>
				</section>
			</div>
		</>
	);
};

export default AboutPage;
