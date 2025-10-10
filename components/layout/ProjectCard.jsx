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
				"container flex flex-col p-4 gap-2 bg-slate-100 dark:bg-slate-600 md:hover:bg-background md:hover:dark:bg-slate-500 md:grid md:grid-cols-3 md:gap-6 ease-in-out shadow-xl shadow-primary_tint_2 dark:shadow-primary_tint_3 delay-25 duration-500 md:hover:-translate-y-3 md:hover:scale-110 md:hover:shadow-project_card_grow"
			}>
			<a
				className="hover:opacity-100"
				tabIndex={-1}
				href={websiteLink ? websiteLink : githubLink}
				target="_blank"
				alt={"Visit Project Page for " + title}
				aria-label={"Visit Project Page for " + title}
				rel="noopener noreferrer">
				<Image
					quality={100}
					className="hidden md:block md:w-full md:h-2/3 md:object-cover lg:h-full"
					src={src}
					alt={alt}
				/>
			</a>
			<div className="gap-y-4 md:text-base md:col-start-2 md:col-end-4 md:gap-y-2 flex flex-col">
				<div className="inline-flex">
					<div className="text-lg font-bold ease-in-out delay-25 duration-500 hover:scale-[1.1] underline hover:decoration-primary">
						<a
							href={websiteLink ? websiteLink : githubLink}
							alt={"Visit Live demo web page for " + title}
							aria-label={
								"Visit Live demo web page for " + title
							}
							target="_blank"
							rel="noopener noreferrer">
							<div className="flex items-center hover:text-primary">
								<FontAwesomeIcon
									className="w-4 h-4"
									icon={faLink}
								/>
								<p className="pl-2">{title}</p>
							</div>
						</a>
					</div>
				</div>
				<p className="w-fit py-1 px-3 font-bold rounded-full text-xs text-background bg-foreground mb-2">
					{date}
				</p>
				<div className="flex flex-wrap gap-2">{badges}</div>
				<div className="inline-flex">
					<div className="text-lg font-bold ease-in-out delay-25 duration-500 hover:scale-[1.1] underline hover:decoration-primary">
						<a
							href={githubLink}
							target="_blank"
							alt={"Visit GitHub repo page for " + title}
							aria-label={
								"Visit GitHub repo page for " + title
							}
							rel="noopener noreferrer">
							<div className="flex items-center hover:text-primary">
								<FontAwesomeIcon
									className="w-4 h-4"
									icon={faGithub}
								/>
								<p className="pl-2">View Repo</p>
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
