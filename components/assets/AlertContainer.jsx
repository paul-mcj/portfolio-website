// toastify
import { ToastContainer } from "react-toastify";

import PropTypes from "prop-types";

const AlertContainer = ({ type }) => {
	return (
		// toast will change functionality and appearance depending on if parent component is the contact form or a download button
		<ToastContainer
			position="top-center"
			autoClose={type === "contact-form" ? 5000 : false}
			hideProgressBar={type === "contact-form" ? false : true}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover={false}
			theme="dark"
			closeButton={false}
			// transition={Flip}
		/>
	);
};

AlertContainer.propTypes = {
	type: PropTypes.string
};

export default AlertContainer;
