// client-side component (scroll-reveal needs IntersectionObserver)
"use client";

// react
import { useEffect, useRef, useState } from "react";

// prop types
import PropTypes from "prop-types";

// next
import Image from "next/image";

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
	const cardRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	const badges = skills.map((skill, index) => (
		<Badge
			title={skill}
			key={index}
		/>
	));

	return (
		<article
			ref={cardRef}
			className={`w-full flex flex-col md:grid md:grid-cols-3 gap-6 p-6 bg-surface border border-line rounded-lg transition-all duration-300 ease-out hover:border-primary motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-6"
			}`}>
			<a
				className="group relative block h-48 md:h-56 w-full overflow-hidden rounded md:col-span-1"
				href={websiteLink ? websiteLink : githubLink}
				target="_blank"
				aria-label={"Visit Project Page for " + title}
				rel="noopener noreferrer">
				<Image
					className="h-full w-full object-cover object-top"
					src={src}
					alt={alt}
					sizes="(min-width: 768px) 33vw, 100vw"
				/>
				<span
					aria-hidden="true"
					className="motion-reduce:hidden pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-12 bg-linear-to-r from-transparent via-white/25 to-transparent group-hover:transition-transform group-hover:duration-700 group-hover:ease-out group-hover:translate-x-[150%]"
				/>
			</a>
			<div className="md:col-span-2 flex flex-col gap-3">
				<div className="flex items-center justify-between gap-4 flex-wrap">
					<a
						href={websiteLink ? websiteLink : githubLink}
						aria-label={"Visit Live demo web page for " + title}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 font-mono font-bold text-heading hover:text-primary transition-colors duration-200">
						<FontAwesomeIcon
							className="w-4 h-4"
							icon={faLink}
						/>
						{title}
					</a>
					<p className="font-mono text-xs text-primary">{date}</p>
				</div>
				<div className="flex flex-wrap gap-2">{badges}</div>
				<p className="text-muted">{desc}</p>
				<a
					href={githubLink}
					target="_blank"
					aria-label={"Visit GitHub repo page for " + title}
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 font-mono text-sm text-faint hover:text-primary transition-colors duration-200 w-fit">
					<FontAwesomeIcon
						className="w-4 h-4"
						icon={faGithub}
					/>
					View Repo
				</a>
			</div>
		</article>
	);
};

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string),
	src: PropTypes.object.isRequired,
	desc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	githubLink: PropTypes.string,
	websiteLink: PropTypes.string
};

export default ProjectCard;
