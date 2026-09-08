// prop types
import PropTypes from "prop-types";

// components
import Badge from "../assets/Badge";
import Reveal from "./Reveal";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// full writeup for /projects. The homepage cards link to `#${slug}`, so the
// scroll-mt here clears the fixed header when a visitor lands on an anchor.
const ProjectSection = ({
	index,
	slug,
	title,
	tagline,
	period,
	status,
	stack,
	overview,
	highlights,
	challenge,
	links
}) => {
	// index is zero-based from .map(), displayed as 01, 02, ...
	const displayIndex = String(index + 1).padStart(2, "0");

	const badges = stack.map((skill) => (
		<Badge
			title={skill}
			key={skill}
		/>
	));

	return (
		// no stagger delay - these are full-width and arrive one at a time
		// as you scroll, so a delay would just read as lag. lift={false}
		// because the homepage cards link straight to these ids.
		<Reveal
			as="article"
			lift={false}
			id={slug}
			className="w-full scroll-mt-32 rounded-lg border border-line bg-surface p-6 md:p-8">
			<div className="flex flex-col gap-6">
				<header className="flex flex-col gap-3">
					<div className="flex items-baseline gap-3">
						<span
							aria-hidden="true"
							className="font-mono text-xs font-bold text-primary">
							{displayIndex}
						</span>
						<span
							aria-hidden="true"
							className="h-px flex-1 bg-line"
						/>
						<span className="font-mono text-xs text-faint">
							{period} · {status}
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<h2 className="font-mono text-xl font-bold text-heading md:text-2xl">
							{title}
						</h2>
						<p className="font-mono text-xs uppercase tracking-wider text-secondary">
							{tagline}
						</p>
					</div>
					<div className="flex flex-wrap gap-2">{badges}</div>
				</header>

				<p className="text-muted">{overview}</p>

				<div className="flex flex-col gap-3">
					<h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-heading">
						{"// what it does"}
					</h3>
					<ul className="flex flex-col gap-2">
						{highlights.map((highlight) => (
							<li
								key={highlight}
								className="flex gap-3 text-sm text-muted">
								<span
									aria-hidden="true"
									className="font-mono text-primary">
									–
								</span>
								<span>{highlight}</span>
							</li>
						))}
					</ul>
				</div>

				{/* optional - a project without a written-up challenge
				    simply goes straight from highlights to its links */}
				{challenge && (
					<div className="flex flex-col gap-2 border-l-2 border-primary pl-4">
						<h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-heading">
							{challenge.title}
						</h3>
						<p className="text-sm text-muted">{challenge.body}</p>
					</div>
				)}

				<div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-4">
					{links.map(({ label, href }) => (
						<a
							key={href}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${label} for ${title}`}
							className="inline-flex items-center gap-2 font-mono text-sm text-faint transition-colors duration-200 hover:text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
							<FontAwesomeIcon
								className="h-4 w-4"
								icon={
									label === "GitHub"
										? faGithub
										: faLink
								}
							/>
							{label}
						</a>
					))}
				</div>
			</div>
		</Reveal>
	);
};

ProjectSection.propTypes = {
	index: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	tagline: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	overview: PropTypes.string.isRequired,
	highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
	challenge: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	}),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired
		})
	).isRequired
};

export default ProjectSection;
