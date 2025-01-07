// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import ProjectCard from "@/components/layout/ProjectCard";
import ImageContainer from "@/components/layout/ImageContainer";
import CallToActionButton from "@/components/assets/CallToActionButton";

// images
import profilePic from "@/public/images/other/profile_pic.jpg";
import onlineStorePic from "@/public/images/project_screenshots/online_store_2.png";

export default function Home() {
	return (
		<>
			<section className="grid place-items-center text-center gap-6 px-6">
				<ImageContainer
					src={profilePic}
					alt="Paul McJannet in pink shirt with waterfall in background"
					title="Paul McJannet"
					borderColor="border-primary"
				/>
				<PrimarySectionHeader title="Hi, I'm Paul, Web Developer" />
				<p>
					Based in Ontario, Canada. I transform ideas into
					beautiful, interactive web applications.
				</p>
				<p>
					I have a diverse set of skills ranging from frontend
					design using JavaScript and React, to machine learning
					with Python.
				</p>
				{/* TODO: use actual updated resume, and implement an alert/toast to warn users that a resume is about to be downloaded onto their system */}
				<a
					href="/downloads/test.pdf"
					download>
					<CallToActionButton>
						Download Resume
					</CallToActionButton>
				</a>
			</section>
			<section className="grid place-items-center gap-6 p-6 mt-24">
				<h2 className="font-merriweather font-bold text-xl">
					Featured Works
				</h2>
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
			</section>
		</>
	);
}
