// images
import canoeing from "@/public/images/slideshow/canoeing.jpeg";
import florida from "@/public/images/slideshow/florida.jpg";
import ice_fishing from "@/public/images/slideshow/ice_fishing.jpg";
import quebec_city_selfie from "@/public/images/slideshow/quebec_city_selfie.jpg";
import sea_to_sky from "@/public/images/slideshow/sea_to_sky.jpg";

// array of image objects. `caption` is shown under the slideshow - it does
// the work `title` cannot, since a tooltip is invisible on touch devices.
// Captions are drawn from what is actually in each photo; embellish freely.
const imagesArray = [
	{
		src: quebec_city_selfie,
		alt: "Paul selfie with old Quebec City buildings and colourful hanging flowers and cobblestone roads in background",
		title: "Selfie on Old Quebec City Street",
		caption: "Cobblestone and hanging flowers -- Old Quebec City, QC"
	},
	{
		src: ice_fishing,
		alt: "Paul and his dad in winter jackets on a frozen lake ice fishing",
		title: "Ice Fishing",
		caption: "Ice fishing with my dad -- Ramsey, ON"
	},
	{
		src: florida,
		alt: "Paul with glasses and green hat smiling with colourful pink, yellow and cyan building close behind",
		title: "Selfie in Key West, FL",
		caption: "Getting ready for snorkeling -- Key West, FL"
	},
	{
		src: canoeing,
		alt: "Paul with red and yellow backpacks next to a canoe in the forest",
		title: "Canoe Trip",
		caption: "Portage trip -- Frontenac Provincial Park, ON"
	},
	{
		src: sea_to_sky,
		alt: "Paul with a black Ottawa Senators hat and grey jacket with misty forest behind",
		title: "Sea to Sky Highway, Outside Vancouver",
		caption: "Taking a road trip on the Sea to Sky Highway -- BC"
	}
];

// array of image paths
const imagePaths = imagesArray.map((image) => image.src);

export { imagesArray, imagePaths };
