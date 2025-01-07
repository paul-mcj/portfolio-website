// client-side component
"use client";

// react
import { useState, useEffect } from "react";

// components
import ImageContainer from "./ImageContainer";

// store
import { imagesArray } from "@/store/app_images.mjs";

const ImageSlideshow = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex < imagesArray.length - 1 ? prevIndex + 1 : 0
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{imagesArray.map((image, index) => (
				<ImageContainer
					key={index}
					src={image.src}
					alt={image.alt}
					title={image.title}
					borderColor="border-primary"
					additionalClasses={
						index === currentImageIndex
							? `active animate-fade_out`
							: "hidden animate-none"
					}
				/>
			))}
		</>
	);
};

export default ImageSlideshow;
