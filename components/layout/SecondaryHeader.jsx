// prop types
import PropTypes from "prop-types";

const SecondaryHeader = ({ title }) => {
	return (
		<h2 className="inline-block self-center font-bold text-xl sm:text-2xl -skew-x-12 -rotate-3 text-white bg-secondary px-4 py-2">
			{title}
		</h2>
	);
};

SecondaryHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default SecondaryHeader;
