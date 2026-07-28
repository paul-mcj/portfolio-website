// components
import FooterIcon from "../assets/FooterIcon";

// icons
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-line">
			<div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 py-8 font-mono text-sm text-faint">
				<p>© {year} Paul McJannet</p>
				<ul className="flex items-center gap-6">
					<li>
						<a
							href="https://github.com/paul-mcj/"
							target="_blank"
							aria-label="Visit GitHub profile page for Paul McJannet"
							rel="noopener noreferrer">
							<FooterIcon iconName={faGithub} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/paul-mcjannet/"
							target="_blank"
							aria-label="Visit LinkedIn profile page for Paul McJannet"
							rel="noopener noreferrer">
							<FooterIcon iconName={faLinkedinIn} />
						</a>
					</li>
					<li>
						<a
							href="mailto:mcjannetp@gmail.com"
							aria-label="Send email to mcjannetp@gmail.com">
							<FooterIcon iconName={faEnvelope} />
						</a>
					</li>
					<li>
						<a
							href="https://www.volinix.ca/"
							target="_blank"
							aria-label="Visit Volinix Studio, Paul's web development company"
							rel="noopener noreferrer"
							className="hover:text-primary transition-colors duration-200">
							Volinix Studio
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
