// prop types
import PropTypes from "prop-types";

const SecondaryHeader = ({ title }) => {
	return (
		<h2 className="font-mono font-semibold text-secondary text-sm uppercase tracking-wider">
			{"/* "}
			{title}
			{" */"}
		</h2>
	);
};

SecondaryHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default SecondaryHeader;
