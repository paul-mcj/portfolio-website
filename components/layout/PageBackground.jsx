// client-side component
"use client";

// next
import { usePathname } from "next/navigation";
import Image from "next/image";

// assets
import backgroundImages from "@/public/assets/backgroundImages";

const PageBackground = () => {
	const pathname = usePathname();

	const background = (path) => {
		switch (path) {
			case "/":
				return backgroundImages[4];
			case "/about":
				return backgroundImages[6];
			case "/contact":
				return backgroundImages[0];
			case "/projects":
				return backgroundImages[2];
			default:
				return null;
		}
	};

	const imageObjectPos = (path) => {
		switch (path) {
			case "/":
				return "object-left";
			case "/about":
				return "object-center";
			case "/contact":
				return "object-center";
			case "/projects":
				return "object-left";
			default:
				return "object-center";
			// return "object-center";
			// return "object-left-top";
			// return "object-top";
			// return "object-right-top";
			// return "object-left";
			// return "object-right";
			// return "object-left-bottom";
			// return "object-bottom";
			// return "object-right-bottom";
		}
	};

	return (
		<div className="absolute w-full h-full inset-0">
			<Image
				src={background(pathname).src}
				alt={background(pathname).alt}
				className={`opacity-60 object-cover  h-full w-full ${imageObjectPos(
					pathname
				)}`}
			/>
		</div>
	);
};

export default PageBackground;
