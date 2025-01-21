// components
import ImageSlideshow from "@/components/layout/ImageSlideshow";
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import Badge from "@/components/assets/Badge";
import CallToActionButton from "@/components/assets/CallToActionButton";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

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
			<section className="flex flex-col gap-y-8 sm:gap-y-12 md:grid md:grid-cols-2 md:grid-rows-1 md:text-base lg:text-lg md:gap-x-8 md:gap-y-0 md:text-left">
				<section className="md:col-start-2 md:col-end-3">
					<ImageSlideshow />
				</section>
				<section className="flex flex-col gap-y-8 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-between md:gap-y-4">
					<PrimarySectionHeader title="About Me" />
					<p className="md:mt-8">
						<span className="inline-block -skew-x-12 -rotate-3 text-secondary font-bold text-xl bg-black px-4 py-2 hover:animate-about_me">
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
				</section>
			</section>
			<section className="flex flex-col gap-y-8 md:px-32 mt-16">
				<SecondaryHeader title="Current Web Tech Stack" />
				<ul className="flex justify-evenly flex-wrap gap-2">
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
			</section>
			<section className="flex flex-col gap-y-8 md:px-32 mt-16">
				<SecondaryHeader title="Other Tech Skills" />
				<ul className="flex justify-evenly flex-wrap gap-2">
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
			</section>
			<section className="flex flex-col gap-y-8 mt-16 place-items-center">
				<SecondaryHeader title="Interests" />
				<ul className="grid gap-2">
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
			</section>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 mt-16 place-items-center">
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
