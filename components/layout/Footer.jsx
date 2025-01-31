// components
import FooterIcon from "../assets/FooterIcon";

// icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center text-center gap-y-2 mt-32 bg-gradient-to-t from-gray-400 dark:from-foreground to-transparent">
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
			<p className="mb-8">
				&copy; 2025 Paul McJannet. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
