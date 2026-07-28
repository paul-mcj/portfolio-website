// prop types
import PropTypes from "prop-types";

const CallToActionButton = ({ children, width, handleOnClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={handleOnClick}
			className={`w-fit self-center py-3 px-6 font-mono font-bold transition-opacity duration-200
				${width}
				${
					disabled
						? "bg-primary/50 text-background/70 cursor-not-allowed"
						: "bg-primary text-background hover:opacity-90 cursor-pointer"
				}`}>
			{children}
		</button>
	);
};

CallToActionButton.propTypes = {
	width: PropTypes.string,
	handleOnClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default CallToActionButton;
