// prop types
import PropTypes from "prop-types";

// next.js
import Image from "next/image";

const ImageContainer = ({
	src,
	alt,
	title,
	borderColor,
	additionalClasses
}) => {
	return (
		<div className={`grid place-items-center ${additionalClasses}`}>
			<Image
				className={`rounded-full border-solid border-4 ${borderColor} w-2/3 lg:full shadow-2xl shadow-black`}
				src={src}
				alt={alt}
				title={title}
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
	additionalClasses: PropTypes.string
};

export default ImageContainer;
