// client-side component
"use client";

// react
import { useEffect, useState } from "react";

// components
import ImageContainer from "./ImageContainer";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

// store
import { imagesArray } from "@/store/app_images.mjs";

// how long each photo is held on screen. The crossfade itself is the
// `duration-1000` below, kept comfortably shorter than this hold so the
// next swap never starts before the last one has finished.
const HOLD_MS = 4750;

const ImageSlideshow = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	// only slides up to here are mounted, so the page does not download all
	// five photos at once. Starts at 1 rather than 0 so the next slide is
	// always already loaded before it has to be shown.
	const [lastMountedIndex, setLastMountedIndex] = useState(1);

	useEffect(() => {
		if (isPaused) return;

		// read at effect time rather than stored in state - calling setState
		// in an effect body trips the react-hooks lint rule, and the setting
		// changing mid-session is not worth subscribing for
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => {
				const nextIndex =
					prevIndex < imagesArray.length - 1 ? prevIndex + 1 : 0;

				setLastMountedIndex((prevMounted) =>
					Math.max(prevMounted, nextIndex + 1)
				);

				return nextIndex;
			});
		}, HOLD_MS);

		return () => clearInterval(interval);
	}, [isPaused]);

	const togglePaused = () => setIsPaused((paused) => !paused);

	return (
		<div className="flex flex-col items-center gap-4">
			{/* mounted photos share one grid cell, so the outgoing and
			    incoming images overlap and can crossfade. Unmounting the
			    outgoing one leaves nothing to fade to, which is what made
			    the old transition blink. */}
			<div className="grid place-items-center">
				{imagesArray.map((image, index) => {
					if (index > lastMountedIndex) return null;

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

			{/* deliberately not an aria-live region: the carousel rotates
			    every few seconds indefinitely, and announcing each caption
			    would interrupt a screen reader user continuously. The min
			    height stops the column jumping between caption lengths. */}
			<p className="min-h-10 max-w-xs text-center font-mono text-xs text-faint">
				{imagesArray[currentImageIndex].caption}
			</p>

			{/* WCAG 2.2.2 - auto-updating content needs a way to stop it.
			    A real button rather than pause-on-hover, so it works from
			    the keyboard too. */}
			<button
				type="button"
				onClick={togglePaused}
				aria-label={
					isPaused
						? "Resume the photo slideshow"
						: "Pause the photo slideshow"
				}
				className="inline-flex items-center gap-2 rounded font-mono text-xs text-faint transition-colors duration-200 hover:text-primary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
				<FontAwesomeIcon
					className="h-3 w-3"
					icon={isPaused ? faPlay : faPause}
				/>
				{isPaused ? "play" : "pause"}
			</button>
		</div>
	);
};

export default ImageSlideshow;
