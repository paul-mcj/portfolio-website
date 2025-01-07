// next
import Head from "next/head";

// store
import imagesArray from "@/store/app_images";

const PreloadImages = () => {
	return (
		<Head>
			{imagesArray.map((image, index) => (
				<link
					key={index}
					rel="preload"
					href={image.src}
					// TODO: load the string exactly???
					// href={image.src.src}
					as="image"
				/>
			))}
		</Head>
	);
};

export default PreloadImages;
