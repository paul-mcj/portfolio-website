// client-side component (needs the current pathname to retrigger on nav)
"use client";

// next
import { usePathname } from "next/navigation";

// prop types
import PropTypes from "prop-types";

// Renders <main> keyed by pathname, so every navigation remounts it and
// replays the clip-path wipe in globals.css - the new page draws itself in
// left to right rather than simply appearing.
//
// This is deliberately not React's <ViewTransition>: that only exists in the
// experimental React build Next bundles internally, and reaching for it would
// mean running the whole site on an experimental React runtime.
const AnimatedMain = ({ children }) => {
	const pathname = usePathname();

	return (
		<main
			key={pathname}
			className="container-page animate-page_wipe grid gap-16 pt-32 pb-16 sm:gap-20 sm:pt-36 md:gap-24 md:pt-40">
			{children}
		</main>
	);
};

AnimatedMain.propTypes = {
	children: PropTypes.node
};

export default AnimatedMain;
