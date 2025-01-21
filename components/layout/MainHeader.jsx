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
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const [animationMenuName, setAnimationMenuName] = useState("");

	const [animationItemName, setAnimationItemName] = useState("");

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

	const mobileLayout = (
		<ul
			className={`${animationMenuName} p-4 list-none bg-primary flex flex-col gap-4 w-full items-end text-xl font-bold shadow-xl shadow-primary_tint_3 absolute -top-48 text-primary_tint_3`}>
			<li className="self-end text-black mt-48">{closeButton}</li>

			<li className={`animate-home_delay_enter`}>
				{/*  <li className={`animate-home_delay_${animationItemName}`}> */}
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

	const hoverEffect =
		"ease-in-out delay-25 hover:scale-125 duration-500 hover:text-white";

	// for larger screens
	const normalNavigationMenu = (
		<ul className="hidden md:flex p-6 list-none bg-primary gap-8 w-full place-content-end text-xl font-bold shadow-md shadow-primary_tint_3 absolute text-primary_tint_3">
			<li className={hoverEffect}>
				<Link href="/">Home</Link>
			</li>
			<li className={hoverEffect}>
				<Link href="/about">About</Link>
			</li>
			<li className={hoverEffect}>
				<Link href="/projects">Projects</Link>
			</li>
			<li className={hoverEffect}>
				<Link href="/contact">Contact</Link>
			</li>
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
