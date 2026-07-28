// prop types
import PropTypes from "prop-types";

const PrimarySectionHeader = ({ title }) => {
	return (
		<h1 className="font-mono font-extrabold text-heading text-2xl sm:text-3xl md:text-4xl leading-tight max-w-full overflow-hidden inline-flex items-center">
			<span
				className="animate-typing inline-block overflow-hidden whitespace-nowrap shrink-0"
				style={{
					width: `${title.length}ch`,
					animationTimingFunction: `steps(${title.length}, end)`
				}}>
				{title}
			</span>
			<span
				aria-hidden="true"
				className="animate-blink inline-block h-[0.85em] w-0.75 bg-secondary ml-1 shrink-0"
			/>
		</h1>
	);
};

PrimarySectionHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PrimarySectionHeader;
