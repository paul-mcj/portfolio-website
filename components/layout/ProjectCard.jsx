// prop types
import PropTypes from "prop-types";

// next
import Link from "next/link";

// components
import Badge from "../assets/Badge";
import Reveal from "./Reveal";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// compact homepage card. Deliberately links inward to the matching section
// on /projects rather than straight out to GitHub - the external links live
// on that page, so a visitor reads the writeup before leaving the site.
const ProjectCard = ({ index, slug, title, tagline, period, stack, summary }) => {
	// index is zero-based from .map(), displayed as 01, 02, ...
	const displayIndex = String(index + 1).padStart(2, "0");

	const badges = stack.map((skill) => (
		<Badge
			title={skill}
			key={skill}
		/>
	));

	return (
		// cards in the same row cross the threshold together, so without a
		// per-card delay all four land at once
		<Reveal
			as="article"
			delay={index * 60}
			className="w-full">
			<Link
				href={`/projects#${slug}`}
				aria-label={`Read more about ${title}`}
				className="group flex h-full flex-col gap-4 rounded-lg border border-line bg-surface p-6 transition-colors duration-200 hover:border-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
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
						{period}
					</span>
				</div>

				<div className="flex flex-col gap-1">
					<h3 className="font-mono text-lg font-bold text-heading transition-colors duration-200 group-hover:text-primary">
						{title}
					</h3>
					<p className="font-mono text-xs uppercase tracking-wider text-secondary">
						{tagline}
					</p>
				</div>

				<p className="text-sm text-muted">{summary}</p>

				<div className="mt-auto flex flex-col gap-4 pt-2">
					<div className="flex flex-wrap gap-2">{badges}</div>
					<span
						aria-hidden="true"
						className="inline-flex items-center gap-2 font-mono text-sm text-faint transition-colors duration-200 group-hover:text-primary">
						read more
						<FontAwesomeIcon
							className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
							icon={faArrowRight}
						/>
					</span>
				</div>
			</Link>
		</Reveal>
	);
};

ProjectCard.propTypes = {
	index: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	tagline: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.string).isRequired,
	summary: PropTypes.string.isRequired
};

export default ProjectCard;
