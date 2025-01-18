// client component
"use client";

// next
import { usePathname } from "next/navigation";
import Image from "next/image";

// assets
import sparkles from "@/public/images/backgrounds/sparkles.jpg";
import galaxy from "@/public/images/backgrounds/galaxy.jpg";

const PageBackground = () => {
	const pathname = usePathname();

	// not found page has a different background image
	const currentBackground =
		pathname !== "/" &&
		pathname !== "/about" &&
		pathname !== "/projects" &&
		pathname !== "/contact"
			? galaxy
			: sparkles;

	return (
		<div className="absolute w-full h-full inset-0 xl:px-48 2xl:px-96">
			<Image
				quality={100}
				src={currentBackground}
				alt={currentBackground}
				priority
				className={`${
					currentBackground === galaxy
						? "opacity-100"
						: "opacity-50"
				} object-cover h-full w-full `}
			/>
		</div>
	);
};

export default PageBackground;
