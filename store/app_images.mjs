// images
import canoeing from "@/public/images/slideshow/canoeing.jpeg";
import florida from "@/public/images/slideshow/florida.jpg";
import ice_fishing from "@/public/images/slideshow/ice_fishing.jpg";
import old_quebec_city from "@/public/images/slideshow/old_quebec_city.jpg";
import quebec_city_selfie from "@/public/images/slideshow/quebec_city_selfie.jpg";

// array of image objects
const imagesArray = [
	{
		src: quebec_city_selfie,
		alt: "Paul selfie with old Quebec City buildings and colourful hanging flowers and cobblestone roads in background",
		title: "Selfie on Old Quebec City Street"
	},
	{
		src: ice_fishing,
		alt: "Paul and his dad in winter jackets on a frozen lake ic fishing",
		title: "Ice Fishing"
	},
	{
		src: florida,
		alt: "Paul with glasses and green hat smiling with colourful pink, yellow and cyan building close behind",
		title: "Selfie in Key West, FL"
	},
	{
		src: old_quebec_city,
		alt: "Paul and best friend Alex side by side with Fairmont Le Château Frontenac in Quebec City in the background",
		title: "Old Quebec City"
	},
	{
		src: canoeing,
		alt: "Paul with red and yellow backpacks next to a canoe in the forest",
		title: "Canoe Trip"
	}
];

// array of image paths
const imagePaths = imagesArray.map((image) => image.src);

export { imagesArray, imagePaths };
