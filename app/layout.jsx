// google fonts
import { JetBrains_Mono, Karla } from "next/font/google";

// css
import "./globals.css";

// components
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

// seo
import { SITE_URL, SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "500", "700", "800"]
});

const karla = Karla({
	variable: "--font-karla",
	subsets: ["latin"],
	weight: ["400", "700"]
});

const description =
	"Paul McJannet is a web developer in Ontario, Canada, building interactive web apps with JavaScript and React, with a growing focus on Python and machine learning.";

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
		<html
			lang="en"
			className={`${jetbrainsMono.variable} ${karla.variable}`}>
			<body className="antialiased min-h-screen relative bg-background text-foreground font-sans selection:bg-secondary selection:text-background">
				<div
					aria-hidden="true"
					className="fixed inset-y-0 left-6 md:left-10 xl:left-20 2xl:left-28 -z-10 w-px bg-line"
				/>
				<MainHeader />

				<main className="container-page grid gap-16 sm:gap-20 md:gap-24 pt-32 pb-16 sm:pt-36 md:pt-40">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
