// toastify
import { ToastContainer } from "react-toastify";

import PropTypes from "prop-types";

const AlertContainer = ({ autoCloseTime }) => {
	return (
		//NOTE: need props depending on if its contact form or download button, so the toast functions can work properly on each component

		<ToastContainer
			position="top-center"
			autoClose={autoCloseTime ? autoCloseTime : false}
			hideProgressBar={false}
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
	autoCloseTime: PropTypes.number
};

export default AlertContainer;
