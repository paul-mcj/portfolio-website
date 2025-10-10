// google fonts
import { Quicksand, Merriweather } from "next/font/google";

// css
import "./globals.css";

// components
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";

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

export const metadata = {
	title: "Paul McJannet | Web Developer",
	description:
		"Paul McJannet is an aspiring web developer who loves to learn about different technologies and integrate those into new projects. Based in Ontario, Canada. He has a diverse set of skills ranging from frontend design using JavaScript and React, to machine learning with Python.",
	icons: { icon: "/icon.png" },
	robots: "index, follow",
	other: {
		"application/ld+json": JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Paul McJannet",
			description:
				"Experienced Python and JavaScript Developer specializing in web development.",
			description: "Python and JavaScript Developer",
			url: "https://www.paulmcjannet.com",
			sameAs: [
				"https://github.com/paul-mcj/",
				"https://www.linkedin.com/in/paul-mcjannet/"
			],
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

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body
// 				className={`${quicksand.className} antialiased min-h-screen relative xl:px-48 2xl:px-96 selection:bg-secondary selection:text-background text-foreground dark:text-background`}>
// 				<PageBackground />
// 				<div className="relative">
// 					<MainHeader />
// 					<main className="grid opacity-100 place-content-center text-center gap-6 sm:gap-12 md:gap-20 p-6 sm:p-12 md:p-24 pt-24 sm:pt-24 md:pt-48 sm:text-xl md:text-2xl">
// 						{children}
// 					</main>
// 					<Footer />
// 				</div>
// 			</body>
// 		</html>
// 	);
// }
