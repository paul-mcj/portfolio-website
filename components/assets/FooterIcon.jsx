// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// prop types
import PropTypes from "prop-types";

const FooterIcon = ({ iconName }) => {
	return (
		<FontAwesomeIcon
			className="w-6 h-6 p-0 hover:text-primary"
			icon={iconName}
		/>
	);
};

FooterIcon.PropTypes = {
	iconName: PropTypes.object.isRequired
};

export default FooterIcon;
