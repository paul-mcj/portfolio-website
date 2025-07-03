// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import SecondaryHeader from "@/components/layout/SecondaryHeader";
import CallToActionButton from "@/components/assets/CallToActionButton";
import ImageContainer from "@/components/layout/ImageContainer";
import ContactForm from "@/components/layout/ContactForm";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// images
import working from "@/public/images/other/working.jpg";

const ContactPage = () => {
	return (
		<>
			<section className="flex flex-col gap-y-8 sm:gap-y-12 md:grid md:grid-cols-2 md:grid-rows-1 md:text-base md:gap-x-8 md:gap-y-0 md:text-left">
				<div className="md:col-start-2 md:col-end-3 md:place-self-center">
					<ImageContainer
						src={working}
						alt="Cartoon of two people working on a computer at a desk with books and calendar in background"
						title="Working together"
						borderColor="border-primary"
					/>
				</div>
				<div className="flex flex-col gap-y-8 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:justify-between md:place-self-center md:gap-y-12 md:text-center">
					<PrimarySectionHeader title="Let's work together!" />
					<ul className="grid gap-y-8 md:gap-y-12 text-lg place-items-center">
						<li>
							<a
								href="https://github.com/paul-mcj/"
								aria-label="Visit GitHub profile page for Paul McJannet"
								target="_blank"
								alt="Visit GitHub profile page for Paul McJannet"
								rel="noopener noreferrer">
								<CallToActionButton>
									<div className="flex justify-center items-center gap-x-2">
										<FontAwesomeIcon
											icon={faGithub}
											className="w-6 h-6"
										/>
										<p>Follow me on GitHub</p>
									</div>
								</CallToActionButton>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/paul-mcjannet/"
								aria-label="Visit LinkedIn profile page for Paul McJannet"
								target="_blank"
								alt="Visit LinkedIn profile page for Paul McJannet"
								rel="noopener noreferrer">
								<CallToActionButton>
									<div className="flex justify-center items-center gap-x-2">
										<FontAwesomeIcon
											icon={faLinkedinIn}
											className="w-6 h-6"
										/>
										<p>Follow me on LinkedIn</p>
									</div>
								</CallToActionButton>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section className="grid place-items-center text-center gap-y-8 sm:gap-y-12 mt-16">
				<SecondaryHeader title="Or Send me an Email!" />
				{/* TODO: fix hostgator email then add form! */}
				{/* <ContactForm /> */}
				<p>
					If you would like to get in touch, please&nbsp;
					<a
						className="underline decoration-primary text-primary font-bold md:hover:decoration-primary md:hover:text-primary md:decoration-inherit md:text-inherit"
						href="mailto:paul@paulmcjannet.com"
						alt="Send email to paul@paulmcjannet.com"
						aria-label="Send email to paul@paulmcjannet.com">
						send me an email
					</a>
					&nbsp;and I'll get back to you as soon as I can!
				</p>
			</section>
		</>
	);
};

export default ContactPage;
