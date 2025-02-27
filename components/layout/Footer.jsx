// components
import FooterIcon from "../assets/FooterIcon";

// icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// next
import Image from "next/image";
import Link from "next/link";

// assets
import mainLogo from "@/public/images/logos/Main_Logo.svg";
import blackAndWhiteLogo from "@/public/images/logos/BW_Logo.svg";
import blackAndWhiteAlt from "@/public/images/logos/Alt_BW_Logo.svg";
import alt1 from "@/public/images/logos/Alt_1_Logo.svg";
import alt2 from "@/public/images/logos/Alt_2_Logo.svg";

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center items-center text-center gap-y-2 mt-32 bg-gradient-to-t from-gray-400 dark:from-foreground to-transparent">
			<ul className="flex place-content-center gap-x-12">
				<li>
					<a
						href="https://github.com/paul-mcj/"
						target="_blank"
						aria-label="Go to Paul McJannet's Github Page"
						rel="noopener noreferrer">
						<FooterIcon iconName={faGithub} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/paul-mcjannet/"
						target="_blank"
						aria-label="Go to Paul McJannet's LinkedIn Profile"
						rel="noopener noreferrer">
						<FooterIcon iconName={faLinkedinIn} />
					</a>
				</li>
				<li>
					<a
						href="https://www.clippings.me/paulmcjannet"
						target="_blank"
						aria-label="Go to Paul McJannet's Clippings Page"
						rel="noopener noreferrer">
						<FooterIcon iconName={faNewspaper} />
					</a>
				</li>
				<li>
					<a
						href="mailto:paul@paulmcjannet.com"
						aria-label="Email Paul McJannet">
						<FooterIcon iconName={faPaperPlane} />
					</a>
				</li>
			</ul>
			<p>&copy; 2025 Paul McJannet. All rights reserved.</p>
			<div className="mb-8">
				<Link href="/">
					<Image
						quality={100}
						src={mainLogo}
						alt="Go to Home Page"
						width={200}
						height={200}
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
