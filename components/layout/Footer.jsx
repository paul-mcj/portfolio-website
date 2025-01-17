// components
import FooterIcon from "../assets/FooterIcon";

// icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center text-center gap-y-2 mt-32 bg-gradient-to-t from-gray-400 to-transparent">
			<ul className="flex justify-evenly ">
				<li>
					<a
						href="https://github.com/paul-mcj/"
						target="_blank"
						rel="noopener noreferrer">
						<FooterIcon iconName={faGithub} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/paul-mcjannet/"
						target="_blank"
						rel="noopener noreferrer">
						<FooterIcon iconName={faLinkedinIn} />
					</a>
				</li>
				<li>
					<a
						href="https://www.clippings.me/paulmcjannet"
						target="_blank"
						rel="noopener noreferrer">
						<FooterIcon iconName={faNewspaper} />
					</a>
				</li>
				<li>
					<a href="mailto:paul@paulmcjannet.com">
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
