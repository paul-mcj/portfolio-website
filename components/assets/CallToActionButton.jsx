// prop types
import PropTypes from "prop-types";

const CallToActionButton = ({ children, width }) => {
	return (
		<button
			className={`bg-primary p-4 text-lg font-bold text-primary_tint_3 shadow-cta shadow-primary_tint_3 ease-in-out delay-25 duration-500 hover:-translate-y-3 hover:scale-110 hover:shadow-cta_grow hover:text-white ${width}`}>
			{children}
		</button>
	);
};

CallToActionButton.PropTypes = {
	width: PropTypes.string
};

export default CallToActionButton;
