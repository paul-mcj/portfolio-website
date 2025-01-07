// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import CallToActionButton from "@/components/assets/CallToActionButton";
import ProjectCard from "@/components/layout/ProjectCard";

import onlineStorePic from "@/public/images/project_screenshots/online_store_2.png";

const ProjectsPage = () => {
	return (
		<>
			<section className="grid place-items-center gap-6 p-6 mt-24">
				<PrimarySectionHeader title="My Projects" />
				<ProjectCard
					title="Online Store"
					date="Nov 2024"
					skills={["html", "css", "javascript"]}
					src={onlineStorePic}
					desc="Responsive multi-page website that uses vanilla JavaScript, HTML and custom CSS to showcase a fictional store. Complete with cart that updates in real time."
					alt="Online website store that sells Magic: the Gathering products"
					githubLink="https://github.com/paul-mcj/Online-Store"
					websiteLink="#"
				/>
				<ProjectCard
					title="Speech Recognition Maze"
					date="Oct 2023"
					skills={["react", "tailwindcss", "vite", "tensorflow"]}
					// TODO: add pic, fix vercel site
					src={onlineStorePic}
					desc="Custom website built with React that randomly generates mazes. Project uses Google's Teachable Machine web-based tool to build audio models, which are used to help users complete the mazes with their microphone."
					alt="Randomly generated maze with blue background"
					githubLink="https://github.com/paul-mcj/Speech-Recognition-Maze"
					websiteLink="#"
				/>
				<ProjectCard
					title="Beer Order App"
					date="Mar 2022"
					skills={[
						"react",
						"rest api",
						"tailwindcss",
						"framer motion"
					]}
					// TODO: add pic, fix vercel site
					src={onlineStorePic}
					desc="React built website that uses REST APIs to gather server data for beer information allowing users to realistically add items to their cart and make purchases."
					alt="e-Commerce store that has several beers available for purchase"
					githubLink="https://github.com/paul-mcj/Beer-Order-App"
					websiteLink="#"
				/>
				<ProjectCard
					title="Python Game"
					date="Nov 2024"
					skills={["python"]}
					src={onlineStorePic}
					desc="Python game where users try to guess numbers within a given range (the range depends on selected difficult level)."
					alt="Python number guessing game being played on a terminal"
					githubLink="https://github.com/paul-mcj/Python-Game"
					websiteLink="#"
				/>
				<ProjectCard
					title="Music Player"
					date="Dec 2021"
					skills={["html", "css", "javascript"]}
					src={onlineStorePic}
					desc="Music player that plays, pauses, skips, repeats and shuffles songs. Also has input sliders for song seeking and volume control."
					alt="A music player with pink and orange background with play, pause and skip buttons"
					githubLink="https://github.com/paul-mcj/Music-Player"
					websiteLink="#"
				/>
				<ProjectCard
					title="Reality Check"
					date="Apr 2023"
					skills={["react native", "javascript", "css"]}
					src={onlineStorePic}
					desc="React Native application that allows users to push notifications of when they need to be reminded to perform reality checks in order to help induce lucid dreams."
					alt="Screenshot of reality check in action where user is setting a reminder timer"
					githubLink="https://github.com/paul-mcj/Reality-Check"
					websiteLink="#"
				/>
				{/* TODO: use actual updated resume, and implement an alert/toast to warn users that a resume is about to be downloaded onto their system */}
			</section>
			<section className="grid place-items-center gap-6 p-6 mt-12">
				<a
					href="/downloads/test.pdf"
					download>
					<CallToActionButton>
						Download Resume
					</CallToActionButton>
				</a>
			</section>
		</>
	);
};

export default ProjectsPage;
