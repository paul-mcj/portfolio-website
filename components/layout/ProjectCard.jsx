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
				"container flex flex-col p-4 gap-2 bg-white shadow-xl shadow-primary_tint_2"
			}>
			<a
				className="text-lg font-bold text-primary"
				href={websiteLink}
				target="_blank"
				rel="noopener noreferrer">
				<div className="flex items-center">
					<FontAwesomeIcon
						className="w-4 h-4 text-primary"
						icon={faLink}
					/>
					<h3 className="text-lg font-bold pl-2 text-primary">
						{title}
					</h3>
				</div>
			</a>
			<p>{date}</p>
			<div className="flex justify-between flex-wrap gap-y-2">
				{badges}
			</div>
			<a
				className="text-lg font-bold text-primary"
				href={githubLink}
				target="_blank"
				rel="noopener noreferrer">
				<div className="flex items-center">
					<FontAwesomeIcon
						className="w-4 h-4 text-primary"
						icon={faGithub}
					/>
					<h3 className="text-lg font-bold pl-2 text-primary">
						View repo
					</h3>
				</div>
			</a>
			<p>{desc}</p>
			<Image
				className="hidden sm:block"
				src={src}
				alt={alt}
				width={"100%"}
				height={"100%"}
			/>
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
