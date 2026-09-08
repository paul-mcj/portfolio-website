// prop types
import PropTypes from "prop-types";

// next.js
import Image from "next/image";

const ImageContainer = ({
	src,
	alt,
	title,
	borderColor,
	priority,
	className,
	ariaHidden
}) => {
	return (
		<div
			aria-hidden={ariaHidden}
			className={`grid place-items-center ${className ?? ""}`}>
			{/* aspect-square + object-cover, so `rounded-full` is a real
			    circle whatever shape the source photo is. Without them only
			    an already-square image comes out round - a landscape one
			    renders as an ellipse. */}
			<Image
				className={`aspect-square rounded-full border-solid border-4 object-cover ${borderColor} w-48 sm:w-56 md:w-64 lg:w-72`}
				src={src}
				alt={alt}
				title={title}
				sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 192px"
				priority={priority}
			/>
		</div>
	);
};

ImageContainer.propTypes = {
	src: PropTypes.object.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	borderColor: PropTypes.string,
	priority: PropTypes.bool,
	className: PropTypes.string,
	ariaHidden: PropTypes.bool
};

export default ImageContainer;
