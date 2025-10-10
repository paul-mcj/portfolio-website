// prop types
import PropTypes from "prop-types";

const CallToActionButton = ({ children, width, handleOnClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={handleOnClick}
			className={`w-fit self-center bg-primary py-4 px-6 text-lg font-bold shadow-cta shadow-primary_tint_3 dark:text-foreground
				${width}
				${
					disabled &&
					"bg-primary_tint_3 shadow-none text-background translate-y-0 scale-100"
				}
				${
					!disabled &&
					"ease-in-out delay-25 duration-500 hover:-translate-y-3 hover:scale-110 hover:shadow-cta_grow hover:text-background"
				}  `}>
			{children}
		</button>
	);
};

CallToActionButton.PropTypes = {
	width: PropTypes.string,
	handleOnClick: PropTypes.func,
	disabled: PropTypes.bool
};

export default CallToActionButton;
