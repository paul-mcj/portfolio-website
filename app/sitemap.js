import { SITE_URL } from "@/store/seo.mjs";

const routes = [
	{ path: "", changeFrequency: "monthly", priority: 1 },
	{ path: "/about", changeFrequency: "yearly", priority: 0.8 },
	{ path: "/projects", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/contact", changeFrequency: "yearly", priority: 0.5 }
];

const sitemap = () =>
	routes.map(({ path, changeFrequency, priority }) => ({
		url: `${SITE_URL}${path}`,
		lastModified: new Date(),
		changeFrequency,
		priority
	}));

export default sitemap;
