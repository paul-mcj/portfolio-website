// google fonts
import { Quicksand, Merriweather } from "next/font/google";

// css
import "./globals.css";

// components
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";

// seo
import { SITE_URL, SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

const quicksand = Quicksand({
	variable: "--font-quicksand-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"]
});

const merriweather = Merriweather({
	variable: "--font-merriweather",
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"]
});

const description =
	"Paul McJannet is an aspiring web developer who loves to learn about different technologies and integrate those into new projects. Based in Ontario, Canada. He has a diverse set of skills ranging from frontend design using JavaScript and React, to machine learning with Python.";

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Paul McJannet | Web Developer",
		template: `%s | ${SITE_NAME}`
	},
	description,
	icons: { icon: "/icon.png" },
	robots: "index, follow",
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: "/",
		siteName: SITE_NAME,
		title: "Paul McJannet | Web Developer",
		description,
		locale: "en_CA",
		images: [defaultOpenGraphImage]
	},
	twitter: {
		card: "summary_large_image",
		title: "Paul McJannet | Web Developer",
		description,
		images: [defaultOpenGraphImage.url]
	},
	other: {
		"application/ld+json": JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Paul McJannet",
			description:
				"Experienced Python and JavaScript Developer specializing in web development.",
			url: SITE_URL,
			sameAs: [
				"https://github.com/paul-mcj/",
				"https://www.linkedin.com/in/paul-mcjannet/"
			],
			jobTitle: "Web Developer",
			knowsAbout: [
				"Python",
				"JavaScript",
				"Web Development",
				"Node.js"
			]
		})
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${quicksand.className} antialiased min-h-screen relative xl:px-48 2xl:px-96 selection:bg-secondary selection:text-background text-foreground dark:text-background`}>
				<PageBackground />
				<MainHeader />

				<main className="relative grid opacity-100 place-content-center text-center gap-6 sm:gap-12 md:gap-20 p-6 sm:p-12 md:p-24 pt-24 sm:pt-24 md:pt-48 sm:text-xl md:text-2xl">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
