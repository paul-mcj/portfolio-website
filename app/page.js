// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import ProjectCard from "@/components/layout/ProjectCard";
import ImageContainer from "@/components/layout/ImageContainer";
import SecondaryHeader from "@/components/layout/SecondaryHeader";
import PromptUserAlert from "@/components/assets/PromptUserAlert";

// images
import profilePic from "@/public/images/other/profile_pic.jpg";
import onlineStore from "@/public/images/project_screenshots/online-store.png";
import speechRecognitionMaze from "@/public/images/project_screenshots/speech-recognition-maze.png";
import beerOrderApp from "@/public/images/project_screenshots/beer-order-app.png";

export default function Home() {
	return (
		<>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 md:grid md:grid-cols-2 md:grid-rows-1 md:text-base lg:text-lg md:gap-x-8 md:gap-y-0 md:text-left">
				<div className="md:col-start-2 md:col-end-3 md:place-self-center">
					<ImageContainer
						src={profilePic}
						alt="Paul McJannet in pink shirt with waterfall in background"
						title="Paul McJannet"
						borderColor="border-primary"
					/>
				</div>
				<div className="flex flex-col gap-y-8 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-between md:place-self-center md:gap-y-8">
					<PrimarySectionHeader title="Hi, I'm Paul, Web Developer" />
					<p>
						Based in Ontario, Canada. I transform ideas into
						beautiful, interactive web applications.
					</p>
					<p>
						I have a diverse set of skills ranging from
						frontend design using JavaScript and React, to
						machine learning with Python.
					</p>
					<div className="md:self-start">
						<PromptUserAlert />
					</div>
				</div>
			</section>
			<section className="grid place-items-center gap-y-8 sm:gap-y-12 mt-16 text-left">
				<SecondaryHeader title="Featured Works" />
				<ProjectCard
					title="Beer Order App"
					date="Mar 2022"
					skills={[
						"react",
						"tailwindcss",
						"json",
						"framer motion"
					]}
					src={beerOrderApp}
					desc="React built website that uses JSON data to gather beer information allowing users to realistically add items to their cart and make purchases."
					alt="Screenshot of e-Commerce store that has several beers available for purchase"
					githubLink="https://github.com/paul-mcj/Beer-Order-App"
					websiteLink="https://beer-order-app.vercel.app/"
				/>
				<ProjectCard
					title="Speech Recognition Maze"
					date="Oct 2023"
					skills={["react", "tailwindcss", "vite", "tensorflow"]}
					src={speechRecognitionMaze}
					desc="Custom website built with React that randomly generates mazes. Project uses Google's Teachable Machine web-based tool to build audio models, which are used to help users complete the mazes with their microphone."
					alt="Screenshot of randomly generated maze with blue background and microphone button to start the application"
					githubLink="https://github.com/paul-mcj/Speech-Recognition-Maze"
					websiteLink="https://speech-recognition-maze.vercel.app/"
				/>
				<ProjectCard
					title="Online Store"
					date="Nov 2024"
					skills={["html", "css", "javascript"]}
					src={onlineStore}
					desc="Responsive multi-page website that uses vanilla JavaScript, HTML and custom CSS to showcase a fictional store. Complete with cart that updates in real time."
					alt="Screenshot of online website store that sells Magic: the Gathering products"
					githubLink="https://github.com/paul-mcj/Online-Store"
					websiteLink="https://paul-mcj.github.io/Online-Store/"
				/>
			</section>
		</>
	);
}
