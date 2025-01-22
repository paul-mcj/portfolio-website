// prop types
import PropTypes from "prop-types";

// next
import Image from "next/image";
import Link from "next/link";

// components
import Badge from "../assets/Badge";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
	title,
	date,
	skills,
	src,
	desc,
	alt,
	githubLink,
	websiteLink
}) => {
	const badges = skills.map((skill, index) => (
		<Badge
			title={skill}
			key={index}
		/>
	));

	return (
		<article
			className={
				"container flex flex-col p-4 gap-2 bg-slate-100 dark:bg-slate-600 hover:bg-background hover:dark:bg-slate-500 md:grid md:grid-cols-3 md:gap-4 ease-in-out shadow-xl shadow-primary_tint_2 dark:shadow-primary_tint_3 delay-25 duration-500 hover:-translate-y-3 hover:scale-110 hover:shadow-project_card_grow"
			}>
			<a
				className="hover:opacity-100"
				href={websiteLink ? websiteLink : githubLink}
				target="_blank"
				rel="noopener noreferrer">
				<Image
					quality={100}
					className="hidden md:block md:w-full md:h-2/3 md:object-cover lg:h-full"
					src={src}
					alt={alt}
				/>
			</a>
			<div className="md:text-base md:col-start-2 md:col-end-4 flex flex-col">
				<div className="inline-flex">
					<div className="text-lg font-bold text-primary hover:text-primary_tint_2">
						<a
							href={websiteLink ? websiteLink : githubLink}
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex items-center">
								<FontAwesomeIcon
									className="w-4 h-4"
									icon={faLink}
								/>
								<h3 className="pl-2">{title}</h3>
							</div>
						</a>
					</div>
				</div>
				<p className="w-fit py-1 px-3 font-bold rounded-full text-xs text-background bg-foreground mb-2">
					{date}
				</p>
				<div className="flex flex-wrap gap-2">{badges}</div>
				<div className="inline-flex">
					<div className="text-lg font-bold text-primary hover:text-primary_tint_2">
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex items-center">
								<FontAwesomeIcon
									className="w-4 h-4"
									icon={faGithub}
								/>
								<h3 className="pl-2">View repo</h3>
							</div>
						</a>
					</div>
				</div>
				<p>{desc}</p>
			</div>
		</article>
	);
};

ProjectCard.PropTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string),
	src: PropTypes.object.isRequired,
	desc: PropTypes.string.isRequired.isRequired,
	alt: PropTypes.string.isRequired,
	githubLink: PropTypes.string,
	websiteLink: PropTypes.string
};

export default ProjectCard;
