// prop types
import PropTypes from "prop-types";

const Badge = ({ title }) => {
	const color = (title) => {
		switch (title) {
			case "html":
			case "bootstrap":
				return "orange";
			case "css":
			case "material ui":
				return "blue";
			case "javascript":
				return "yellow";
			case "vite":
				return "violet";
			case "tensorflow":
			case "next.js":
				return "amber";
			case "tailwindcss":
				return "cyan";
			case "react":
				return "sky";
			case "react native":
			case "pip":
				return "emerald";
			case "rest api":
				return "lime";
			case "framer motion":
				return "rose";
			case "python":
				return "indigo";
			case "mysql":
			case "git":
				return "pink";
			case "ccna":
			case "npm":
				return "stone";
			case "json":
			case "node.js":
				return "red";
			default:
				return "";
		}
	};

	return (
		<span
			className={`inline-block py-1 px-3 font-bold rounded-full text-sm border-2 text-${color(
				title
			)}-600 border-${color(title)}-600 bg-${color(
				title
			)}-400 text-${color(title)}-900`}>
			{title.toUpperCase()}
		</span>
	);
};

Badge.PropTypes = {
	title: PropTypes.string.isRequired
};

export default Badge;
