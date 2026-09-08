// client-side component
"use client";

// react
import { useState, useEffect } from "react";

// components
import ImageContainer from "./ImageContainer";

// store
import { imagesArray } from "@/store/app_images.mjs";

// how long each photo is held on screen. The crossfade itself is the
// `duration-1000` below, kept comfortably shorter than this hold so the
// next swap never starts before the last one has finished.
const HOLD_MS = 4750;

const ImageSlideshow = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex < imagesArray.length - 1 ? prevIndex + 1 : 0
			);
		}, HOLD_MS);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-center gap-4">
			{/* every photo stays mounted and shares one grid cell, so the
			    outgoing and incoming images overlap and can crossfade.
			    Unmounting or `hidden` leaves nothing to fade to, which is
			    what made the old transition blink. */}
			<div className="grid place-items-center">
				{imagesArray.map((image, index) => {
					const isActive = index === currentImageIndex;

					return (
						<ImageContainer
							key={image.title}
							src={image.src}
							alt={image.alt}
							title={image.title}
							borderColor="border-primary"
							priority={index === 0}
							ariaHidden={!isActive}
							className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
								isActive
									? "opacity-100"
									: "opacity-0 pointer-events-none"
							}`}
						/>
					);
				})}
			</div>

			{/* aria-live so the caption change is announced with the image,
			    and a min height so the column does not jump between captions
			    of different lengths */}
			<p
				aria-live="polite"
				className="min-h-10 max-w-xs text-center font-mono text-xs text-faint">
				{imagesArray[currentImageIndex].caption}
			</p>
		</div>
	);
};

export default ImageSlideshow;
