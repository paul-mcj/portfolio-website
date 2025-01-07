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

const MainHeader = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const [animationMenuName, setAnimationMenuName] = useState("");

	const [animationItemName, setAnimationItemName] = useState("");

	const pathname = usePathname();

	const [prevPathName, setPrevPathName] = useState(pathname);

	// if we change pages, close the nav menu on mobile if its open
	useEffect(() => {
		if (pathname !== prevPathName) {
			setIsMobileMenuOpen(() => false);
			setPrevPathName(() => pathname);
		}
	});

	const toggleMobileMenu = () => {
		if (isMobileMenuOpen) {
			setAnimationItemName(() => "enter");
			setAnimationMenuName(() => "animate-roll_up animate-forwards");
		} else {
			setAnimationItemName(() => "exit");
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
			className="sm:hidden p-4 focus:outline-none"
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
			className="sm:hidden focus:outline-none"
			aria-label="Toggle mobile navigation menu">
			<FontAwesomeIcon
				className="w-8 h-8"
				icon={faXmark}
			/>
		</button>
	);

	const mobileLayout = (
		<ul
			className={`${animationMenuName} p-4 list-none bg-primary flex flex-col gap-4 w-full items-end text-xl font-bold shadow-xl shadow-primary_tint_3 absolute -top-48 text-primary_tint_3`}>
			<li className="self-end text-black mt-48">{closeButton}</li>

			<li className={`animate-home_delay_enter`}>
				{/* <li className={`animate-home_delay_${animationItemName}`}> */}
				<Link href="/">Home</Link>
			</li>

			<li className={`animate-about_delay_${animationItemName}`}>
				<Link href="/about">About</Link>
			</li>

			<li className={`animate-projects_delay_${animationItemName}`}>
				<Link href="/projects">Projects</Link>
			</li>

			<li className={`animate-contact_delay_${animationItemName}`}>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	);

	// for larger screens
	const normalNavigationMenu = (
		<ul className=" hidden sm:flex space-x-4 p-4">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/about">About</Link>
			</li>
			<li>
				<Link href="/projects">Projects</Link>
			</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
	);

	return (
		<header className="container fixed z-20">
			<nav className="flex justify-end sm:flex-none relative">
				{normalNavigationMenu}
				{!isMobileMenuOpen && hamburgerButton}
				{isMobileMenuOpen && mobileLayout}
			</nav>
		</header>
	);
};

export default MainHeader;
