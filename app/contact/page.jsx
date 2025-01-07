// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
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
			<section className="grid place-items-center text-center gap-x-6 gap-y-12 px-6">
				<PrimarySectionHeader title="Let's work together!" />
				<ImageContainer
					src={working}
					alt="Cartoon of two people working on a computer at a desk with books and calendar in background"
					title="Working together"
					borderColor="border-primary"
				/>
				<ul className="grid gap-y-8 text-lg place-items-center">
					<li>
						<a
							href="https://github.com/paul-mcj/"
							target="_blank"
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
							target="_blank"
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
			</section>
			<section className="grid place-items-center text-center gap-x-6 gap-y-12 px-6">
				<h2 className="font-merriweather font-bold text-xl mt-24">
					Or Send me an Email!
				</h2>
				<ContactForm />
			</section>
		</>
	);
};

export default ContactPage;
