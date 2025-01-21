// prop types
import PropTypes from "prop-types";

// next.js
import Image from "next/image";

const ImageContainer = ({
	src,
	alt,
	title,
	borderColor,
	activeAnimation,
	isHidden
}) => {
	return (
		<div
			className={`grid place-items-center ${activeAnimation} ${isHidden}`}>
			<Image
				className={`rounded-full border-solid border-4 ${borderColor} w-2/3 md:w-full lg:full shadow-2xl shadow-black`}
				src={src}
				alt={alt}
				title={title}
				priority
			/>
		</div>
	);
};

ImageContainer.defaultProps = {
	additionalClasses: ""
};

ImageContainer.PropTypes = {
	src: PropTypes.object.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	borderColor: PropTypes.string,
	activeAnimation: PropTypes.bool,
	isHidden: PropTypes.bool
};

export default ImageContainer;
