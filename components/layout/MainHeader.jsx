// client-side component
"use client";

// react
import { useState } from "react";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" }
];

const MainHeader = () => {
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const [prevPathname, setPrevPathname] = useState(pathname);

	// if we change pages, close the nav menu on mobile if its open
	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		setIsMobileMenuOpen(false);
	}

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

	const linkClasses = (href) =>
		`relative transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-out hover:after:w-full motion-reduce:after:hidden ${
			pathname === href ? "text-heading" : "text-muted"
		}`;

	return (
		<header className="fixed inset-x-0 top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-sm">
			<nav className="container-page flex items-center justify-between py-5">
				<Link
					href="/"
					className="inline-flex items-center font-mono font-bold text-heading">
					paul.dev
					<span
						aria-hidden="true"
						className="animate-blink ml-0.5 inline-block h-[1em] w-[0.5em] bg-secondary"
					/>
				</Link>

				<ul className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
					{navLinks.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className={linkClasses(href)}>
								{label}
							</Link>
						</li>
					))}
				</ul>

				<button
					onClick={toggleMobileMenu}
					className="md:hidden text-heading cursor-pointer focus:outline-hidden"
					aria-expanded={isMobileMenuOpen}
					aria-label="Toggle mobile navigation menu">
					<FontAwesomeIcon
						className="w-6 h-6"
						icon={isMobileMenuOpen ? faXmark : faEllipsisVertical}
					/>
				</button>
			</nav>

			<ul
				className={`md:hidden overflow-hidden border-t border-line bg-surface transition-all duration-300 ease-in-out ${
					isMobileMenuOpen
						? "max-h-64 opacity-100"
						: "max-h-0 opacity-0"
				}`}>
				{navLinks.map(({ href, label }) => (
					<li
						key={href}
						className="container-page">
						<Link
							href={href}
							className={`block py-3 font-mono text-sm font-medium ${linkClasses(
								href
							)}`}>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default MainHeader;
