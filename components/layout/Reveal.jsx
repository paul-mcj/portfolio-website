// client-side component (scroll-reveal needs IntersectionObserver)
"use client";

// react
import { useEffect, useRef, useState } from "react";

// prop types
import PropTypes from "prop-types";

// Fades and lifts its children into place the first time they scroll into
// view, then disconnects - the reveal happens once, not on every pass.
//
// `as` matters: several of the places this is used are grid items or list
// items, and wrapping those in a <div> would break the layout around them.
// Pass `as="li"` inside a <ul>, `as="article"` for a card, and so on.
//
// `delay` is what turns a row of siblings into a cascade rather than one
// simultaneous pop. Roughly 60-80ms apart reads as deliberate; much more
// starts to feel slow.
const Reveal = ({
	as: Tag = "div",
	children,
	delay = 0,
	className = "",
	...rest
}) => {
	const elementRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = elementRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			// low threshold so tall sections trigger as they appear rather
			// than only once most of the card is already on screen
			{ threshold: 0.1 }
		);
		observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={elementRef}
			{...rest}
			style={{ transitionDelay: `${delay}ms` }}
			className={`transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:delay-[0ms] ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-6"
			} ${className}`}>
			{children}
		</Tag>
	);
};

Reveal.propTypes = {
	as: PropTypes.elementType,
	children: PropTypes.node,
	delay: PropTypes.number,
	className: PropTypes.string
};

export default Reveal;
