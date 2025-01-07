const CallToActionButton = ({ children }) => {
	return (
		<button className="bg-primary p-4 text-lg font-bold text-primary_tint_3 shadow-cta shadow-primary_tint_3">
			{children}
		</button>
	);
};

export default CallToActionButton;
