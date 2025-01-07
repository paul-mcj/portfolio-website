// components
import ImageSlideshow from "@/components/layout/ImageSlideshow";
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import Badge from "@/components/assets/Badge";
import CallToActionButton from "@/components/assets/CallToActionButton";

// next
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faHockeyPuck } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
	return (
		<>
			<section className="grid place-items-center text-center gap-x-6 gap-y-12 px-6">
				<ImageSlideshow />
				<PrimarySectionHeader title="About Me" />
				<article className="grid gap-y-6">
					<p>
						<span className="text-secondary font-bold text-xl">
							Hey, I'm Paul!
						</span>{" "}
						I am an aspiring web developer who loves to learn
						about different technologies and integrate those
						into new projects.
					</p>
					<p>
						Python is the most recent technology I have fallen
						in love with, and I am interested to see how I can
						incorporate it into my web development projects
						mostly either on the backend or to use with
						machine learning.
					</p>
				</article>
				<article className="grid gap-y-6">
					<h2 className="font-merriweather font-bold text-xl">
						Current Web Tech Stack
					</h2>
					<ul className="flex justify-between flex-wrap gap-2">
						<li>
							<Badge title="html" />
						</li>
						<li>
							<Badge title="css" />
						</li>
						<li>
							<Badge title="javascript" />
						</li>
						<li>
							<Badge title="react" />
						</li>
						<li>
							<Badge title="next.js" />
						</li>
						<li>
							<Badge title="react native" />
						</li>
						<li>
							<Badge title="node.js" />
						</li>
						<li>
							<Badge title="tailwindcss" />
						</li>
						<li>
							<Badge title="npm" />
						</li>
						<li>
							<Badge title="python" />
						</li>
						<li>
							<Badge title="pip" />
						</li>
						<li>
							<Badge title="mysql" />
						</li>
					</ul>
				</article>
				<article className="grid gap-y-6">
					<h2 className="font-merriweather font-bold text-xl">
						Other Tech & Skills
					</h2>
					<ul className="flex justify-between flex-wrap gap-2">
						<li>
							<Badge title="json" />
						</li>
						<li>
							<Badge title="rest api" />
						</li>
						<li>
							<Badge title="git" />
						</li>
						<li>
							<Badge title="vite" />
						</li>
						<li>
							<Badge title="tensorflow" />
						</li>
						<li>
							<Badge title="ccna" />
						</li>
						<li>
							<Badge title="bootstrap" />
						</li>
						<li>
							<Badge title="material ui" />
						</li>
					</ul>
				</article>
				<article className="grid gap-y-6">
					<h2 className="font-merriweather font-bold text-xl">
						Interests
					</h2>
					<ul className="grid gap-y-2 text-left">
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faPython}
									className="w-6 h-6"
								/>
							</span>
							Python
						</li>
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faMicrochip}
									className="w-6 h-6"
								/>
							</span>
							Machine Learning
						</li>
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faHockeyPuck}
									className="w-6 h-6"
								/>
							</span>
							Hockey
						</li>
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faBaseball}
									className="w-6 h-6"
								/>
							</span>
							Baseball
						</li>
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faHeadphones}
									className="w-6 h-6"
								/>
							</span>
							Music
						</li>
						<li className="flex content-center gap-x-2">
							<span>
								<FontAwesomeIcon
									icon={faWizardsOfTheCoast}
									className="w-6 h-6"
								/>
							</span>
							Magic: the Gathering
						</li>
					</ul>
				</article>
				<Link href="/contact">
					<CallToActionButton>
						Get in touch with me
					</CallToActionButton>
				</Link>
			</section>
		</>
	);
};

export default AboutPage;
