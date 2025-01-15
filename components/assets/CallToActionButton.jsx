// prop types
import PropTypes from "prop-types";

const CallToActionButton = ({ children, width, handleOnClick }) => {
	return (
		<button
			onClick={handleOnClick}
			className={`w-fit self-center bg-primary py-4 px-6 text-lg font-bold text-primary_tint_3 shadow-cta shadow-primary_tint_3 ease-in-out delay-25 duration-500 hover:-translate-y-3 hover:scale-110 hover:shadow-cta_grow hover:text-white ${width}`}>
			{children}
		</button>
	);
};

CallToActionButton.PropTypes = {
	width: PropTypes.string,
	handleOnClick: PropTypes.func
};

export default CallToActionButton;
