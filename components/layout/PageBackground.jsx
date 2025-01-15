// next
import Image from "next/image";

// assets
import sparkles from "@/public/images/backgrounds/sparkles.jpg";

const PageBackground = () => {
	return (
		<div className="absolute w-full h-full inset-0 xl:px-48 2xl:px-96">
			<Image
				quality={100}
				src={sparkles}
				alt={sparkles}
				priority
				className={`opacity-50 object-cover h-full w-full `}
			/>
		</div>
	);
};

export default PageBackground;
