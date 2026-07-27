import { SITE_URL } from "@/store/seo.mjs";

const robots = () => ({
	rules: {
		userAgent: "*",
		allow: "/"
	},
	sitemap: `${SITE_URL}/sitemap.xml`
});

export default robots;
