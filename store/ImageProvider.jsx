// client side component
"use client";

// react
import { createContext, useContext, useEffect, useState } from "react";

// store
import imagesArray from "@/store/app_images";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const preloadImages = async (imagePaths) => {
			const loadedImages = {};
			for (const path of imagePaths) {
				const img = new Image();
				img.src = path;
				await img.decode();
				loadedImages[path] = img;
			}
			setImages(() => loadedImages);
		};

		preloadImages(() => imagesArray.src);
	}, []);

	return (
		<ImageContext.Provider value={images}>
			{children}
		</ImageContext.Provider>
	);
};

export const usePreloadedImages = () => useContext(ImageContext);
