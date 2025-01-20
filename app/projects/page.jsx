// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import ProjectCard from "@/components/layout/ProjectCard";
import PromptUserAlert from "@/components/assets/PromptUserAlert";

// images
import onlineStore from "@/public/images/project_screenshots/online-store.png";
import speechRecognitionMaze from "@/public/images/project_screenshots/speech-recognition-maze.png";
import beerOrderApp from "@/public/images/project_screenshots/beer-order-app.png";
import pythonGame from "@/public/images/project_screenshots/python-game.png";
import musicPlayer from "@/public/images/project_screenshots/music-player.png";
import cryptoCalculator from "@/public/images/project_screenshots/crypto-calculator.png";

const ProjectsPage = () => {
	return (
		<>
			<section className="grid place-items-center gap-y-8 sm:gap-y-12 text-left md:text-base lg:text-lg">
				<PrimarySectionHeader title="My Projects" />
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
				<ProjectCard
					title="Python Game"
					date="Nov 2024"
					skills={["python"]}
					src={pythonGame}
					desc="Python game where users try to guess numbers within a given range (the range depends on selected difficult level)."
					alt="Screenshot of python number guessing game"
					githubLink="https://github.com/paul-mcj/Python-Game"
					// TODO: add website once on vercel
					// websiteLink="#"
				/>
				<ProjectCard
					title="Music Player"
					date="Dec 2021"
					skills={["html", "css", "javascript"]}
					src={musicPlayer}
					desc="Music player that plays, pauses, skips, repeats and shuffles songs. Also has input sliders for song seeking and volume control."
					alt="Screenshot of a music player with pink and orange background with play, pause and skip buttons"
					githubLink="https://github.com/paul-mcj/Music-Player"
					websiteLink="https://paul-mcj.github.io/Music-Player/"
				/>
				{/* TODO: add relaity check once it works properly on (on Google play store?) */}
				{/* <ProjectCard
					title="Reality Check"
					date="Apr 2023"
					skills={["react native", "javascript", "css"]}
					src={onlineStore}
					desc="React Native application that allows users to push notifications of when they need to be reminded to perform reality checks in order to help induce lucid dreams."
					alt="Screenshot of reality check in action where user is setting a reminder timer"
					githubLink="https://github.com/paul-mcj/Reality-Check"
					websiteLink="#"
				/> */}
				<ProjectCard
					title="Crypto Calculator"
					date="Dec 2021"
					skills={["html", "css", "javascript"]}
					src={cryptoCalculator}
					desc="Calculates real time spot price of a few different crypto currency tokens into different fiat currencies"
					alt="Screenshot of simple calculator converting crypto currency amounts into fiat worth"
					githubLink="https://github.com/paul-mcj/Crypto-Calculator"
					websiteLink="https://paul-mcj.github.io/Crypto-Calculator/"
				/>
			</section>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 mt-16">
				<PromptUserAlert />
			</section>
		</>
	);
};

export default ProjectsPage;
