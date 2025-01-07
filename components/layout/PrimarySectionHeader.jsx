// prop types
import PropTypes from "prop-types";

const PrimarySectionHeader = ({ title }) => {
	return (
		<h1 className="font-merriweather font-bold text-3xl px-16">
			{title}
		</h1>
	);
};

PrimarySectionHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default PrimarySectionHeader;
