// // prop types
// import PropTypes from "prop-types";

// const SecondaryHeader = ({ title }) => {
// 	return (
// 		<div className="flex flex-col self-center font-bold text-xl sm:text-2xl text-black">
// 			<h2>{title}</h2>
// 			<div className="inline-block w-full self-center font-bold text-xl sm:text-2xl text-black border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-secondary"></div>
// 		</div>
// 	);
// };

// SecondaryHeader.propTypes = {
// 	title: PropTypes.string.isRequired
// };

// export default SecondaryHeader;

// prop types
import PropTypes from "prop-types";

const SecondaryHeader = ({ title }) => {
	return (
		<h2 className="inline-block self-center font-bold text-xl sm:text-2xl -skew-x-12 -rotate-3 text-white bg-secondary px-4 py-2">
			{title}
		</h2>
	);
};

SecondaryHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default SecondaryHeader;
