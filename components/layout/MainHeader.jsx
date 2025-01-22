// client-side component
"use client";

// react
import { useEffect, useState } from "react";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const [animationMenuName, setAnimationMenuName] = useState("");

	const [prevPathName, setPrevPathName] = useState(pathname);

	const [darkModeActive, setDarkModeActive] = useState(false);

	// if we change pages, close the nav menu on mobile if its open
	useEffect(() => {
		if (pathname !== prevPathName) {
			setIsMobileMenuOpen(() => false);
			setPrevPathName(() => pathname);
		}
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
		}
	});

	// apply hover styling to navbar items
	const hoverEffect =
		"ease-in-out delay-25 hover:scale-125 duration-500 hover:text-background";

	// toggles dark and light mode
	const toggleDarkMode = () => {
		const root = document.documentElement;
		if (root.classList.contains("dark")) {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setDarkModeActive((prev) => !prev);
	};

	// open and close mobile menu
	const toggleMobileMenu = () => {
		if (isMobileMenuOpen) {
			setAnimationMenuName(() => "animate-roll_up");
		} else {
			setAnimationMenuName(() => "animate-roll_down");
		}

		if (!isMobileMenuOpen) {
			setTimeout(() => {
				setIsMobileMenuOpen((prev) => !prev);
			}, 100);
		} else {
			setTimeout(() => {
				setIsMobileMenuOpen((prev) => !prev);
			}, 500);
		}
	};

	// hamburger button
	const hamburgerButton = (
		<button
			onClick={toggleMobileMenu}
			className="md:hidden p-4 focus:outline-none"
			aria-label="Toggle mobile navigation menu">
			<FontAwesomeIcon
				className="w-8 h-8"
				icon={faEllipsisVertical}
			/>
		</button>
	);

	// close button
	const closeButton = (
		<button
			onClick={toggleMobileMenu}
			className="md:hidden focus:outline-none"
			aria-label="Toggle mobile navigation menu">
			<FontAwesomeIcon
				className="w-8 h-8"
				icon={faXmark}
			/>
		</button>
	);

	// button switchs dark mode
	const darkModeButton = (
		<li
			className={`text-primary_tint_3 left-0 absolute top-48 p-4 md:static md:p-0 md:mr-auto hover:cursor-pointer hover:text-background ${hoverEffect}`}
			onClick={toggleDarkMode}>
			{darkModeActive ? (
				<FontAwesomeIcon
					className="w-8 h-8"
					icon={faSun}
				/>
			) : (
				<FontAwesomeIcon
					className="w-8 h-8"
					icon={faMoon}
				/>
			)}
		</li>
	);

	// buttons navigation to main pages
	const navigationButtons = (
		<>
			<li
				className={`${hoverEffect} ${
					isMobileMenuOpen && "animate-home_delay_enter"
				}`}>
				<Link href="/">Home</Link>
			</li>

			<li
				className={`${hoverEffect} ${
					isMobileMenuOpen && "animate-about_delay_enter"
				}`}>
				<Link href="/about">About</Link>
			</li>

			<li
				className={`${hoverEffect} ${
					isMobileMenuOpen && "animate-projects_delay_enter"
				}`}>
				<Link href="/projects">Projects</Link>
			</li>

			<li
				className={`${hoverEffect} ${
					isMobileMenuOpen && "animate-contact_delay_enter"
				}`}>
				<Link href="/contact">Contact</Link>
			</li>
		</>
	);

	// layout for mobile screens
	const mobileLayout = (
		<ul
			className={`${animationMenuName} p-4 list-none bg-primary flex flex-col gap-4 w-full items-end text-xl font-bold shadow-xl shadow-primary_tint_3 absolute -top-48 text-primary_tint_3`}>
			<li className="text-foreground mt-48">{closeButton}</li>
			{darkModeButton}
			{navigationButtons}
		</ul>
	);

	// for larger screens
	const normalNavigationMenu = (
		<ul className="hidden md:flex p-6 list-none bg-primary gap-8 w-full place-content-end text-xl font-bold shadow-md shadow-primary_tint_3 absolute text-primary_tint_3">
			{darkModeButton}
			{navigationButtons}
		</ul>
	);

	return (
		<header className="container fixed z-20 min-w-full xl:px-48 2xl:px-96 xl:left-0">
			<nav className="flex justify-end md:flex-none relative">
				{normalNavigationMenu}
				{!isMobileMenuOpen && hamburgerButton}
				{isMobileMenuOpen && mobileLayout}
			</nav>
		</header>
	);
};

export default MainHeader;
