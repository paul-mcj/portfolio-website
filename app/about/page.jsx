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

// seo
import { SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

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
				<section className="md:col-start-2 md:col-end-3 md:place-self-center">
					<ImageSlideshow />
				</section>
				<section className="flex flex-col gap-y-6 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-center">
					<p className="font-mono text-sm font-semibold text-secondary uppercase tracking-wider">
						{"// about me"}
					</p>
					<PrimarySectionHeader title="About Me" />
					<p className="md:mt-8 text-muted">
						<span className="font-bold text-lg">
							Hey, I&apos;m Paul!
						</span>{" "}
						I am the founder and lead developer of{" "}
						<Link
							href="https://www.volinix.ca"
							className="underline font-bold text-primary">
							Volinix Studio
						</Link>
						, a Ontario-based company that offers web design,
						SEO and content care services for small local
						businesses.
					</p>
					<p className="text-muted">
						Python is the most recent technology I have fallen
						in love with, and I am interested to see how I can
						incorporate it into my web development projects
						mostly either on the backend or to use with
						machine learning.
					</p>
				</section>
			</section>
			<div className="flex flex-col gap-y-10 md:gap-y-14">
				<section className="flex flex-col gap-y-8">
					<SecondaryHeader title="current web tech stack" />
					<ul className="flex justify-center flex-wrap gap-2">
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
				<section className="flex flex-col gap-y-8">
					<SecondaryHeader title="other tech skills" />
					<ul className="flex justify-center flex-wrap gap-2">
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
				<section className="flex flex-col gap-y-8">
					<SecondaryHeader title="interests" />
					<ul className="flex flex-wrap justify-center gap-2 text-muted">
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faPython}
									className="w-4 h-4"
								/>
							</span>
							Python
						</li>
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faMicrochip}
									className="w-4 h-4"
								/>
							</span>
							Machine Learning
						</li>
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faHockeyPuck}
									className="w-4 h-4"
								/>
							</span>
							Hockey
						</li>
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faBaseball}
									className="w-4 h-4"
								/>
							</span>
							Baseball
						</li>
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faHeadphones}
									className="w-4 h-4"
								/>
							</span>
							Music
						</li>
						<li className="group inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-cyan hover:bg-cyan hover:text-background">
							<span className="text-cyan transition-colors duration-200 group-hover:text-background">
								<FontAwesomeIcon
									icon={faWizardsOfTheCoast}
									className="w-4 h-4"
								/>
							</span>
							Magic: the Gathering
						</li>
					</ul>
				</section>
				<section className="flex flex-col gap-y-8 place-items-center">
					<Link href="/contact">
						<CallToActionButton>
							./get-in-touch
						</CallToActionButton>
					</Link>
				</section>
			</div>
		</>
	);
};

export default AboutPage;
