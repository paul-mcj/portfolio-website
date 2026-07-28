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
	isHidden,
	preload
}) => {
	return (
		<div
			className={`grid place-items-center ${activeAnimation} ${isHidden}`}>
			<Image
				className={`rounded-full border-solid border-4 ${borderColor} w-48 sm:w-56 md:w-64 lg:w-72`}
				src={src}
				alt={alt}
				title={title}
				sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 192px"
				preload={preload}
				fetchPriority={preload ? "high" : undefined}
			/>
		</div>
	);
};

ImageContainer.propTypes = {
	src: PropTypes.object.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	borderColor: PropTypes.string,
	activeAnimation: PropTypes.bool,
	isHidden: PropTypes.bool,
	preload: PropTypes.bool
};

export default ImageContainer;
