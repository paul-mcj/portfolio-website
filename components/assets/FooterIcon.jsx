// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// prop types
import PropTypes from "prop-types";

const FooterIcon = ({ iconName }) => {
	return (
		<FontAwesomeIcon
			className="w-8 h-8"
			icon={iconName}
		/>
	);
};

FooterIcon.PropTypes = {
	iconName: PropTypes.object.isRequired
};

export default FooterIcon;
