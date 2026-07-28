// prop types
import PropTypes from "prop-types";

// each tag name maps to one of four accent variants below - grouped roughly
// by category (languages / JS runtime & data / frontend frameworks / misc)
const variantByTitle = {
	html: "primary",
	css: "primary",
	python: "primary",
	mysql: "primary",

	javascript: "secondary",
	"node.js": "secondary",
	json: "secondary",
	npm: "secondary",
	pip: "secondary",

	react: "cyan",
	"next.js": "cyan",
	"react native": "cyan",
	tailwindcss: "cyan",
	vite: "cyan",
	"framer motion": "cyan",
	bootstrap: "cyan",
	"material ui": "cyan",

	"rest api": "muted",
	git: "muted",
	tensorflow: "muted",
	ccna: "muted"
};

// static class strings only - no interpolated Tailwind class names, so
// nothing here relies on a safelist to survive production builds
const variantClasses = {
	primary: "text-primary border-primary hover:bg-primary hover:text-background",
	secondary:
		"text-secondary border-secondary hover:bg-secondary hover:text-background",
	cyan: "text-cyan border-cyan hover:bg-cyan hover:text-background",
	muted: "text-muted border-line hover:bg-line hover:text-heading"
};

const Badge = ({ title }) => {
	const variant = variantByTitle[title] ?? "muted";

	return (
		<span
			className={`inline-block py-1 px-3 font-mono font-semibold text-xs uppercase tracking-wide rounded border transition-colors duration-200 ${variantClasses[variant]}`}>
			{title}
		</span>
	);
};

Badge.propTypes = {
	title: PropTypes.string.isRequired
};

export default Badge;
