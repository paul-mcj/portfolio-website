// prop types
import PropTypes from "prop-types";

const PrimarySectionHeader = ({ title }) => {
	return (
		<h1 className="font-merriweather font-bold text-3xl sm:text-4xl px-8 md:px-0">
			{title}
		</h1>
	);
};

PrimarySectionHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PrimarySectionHeader;
