// client-side component (the boot sequence needs IntersectionObserver)
"use client";

// react
import { useEffect, useRef, useState } from "react";

// prop types
import PropTypes from "prop-types";

// boot sequence timings. Deliberately quick - the window should look like it
// filled itself in, not like it is making you wait for it.
const CHAR_MS = 25; // per character of a command
const OUTPUT_MS = 80; // pause before a command's output prints
const LINE_MS = 120; // pause before the next command starts

// The shared terminal chrome used on the home, about and contact pages.
// Pass `lines` for a command/output transcript, or `children` for arbitrary
// content (the contact page puts a list of links inside its window).
const TerminalCard = ({ path, lines, children }) => {
	const cardRef = useRef(null);
	const [hasStarted, setHasStarted] = useState(false);
	const [lineIndex, setLineIndex] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [isOutputShown, setIsOutputShown] = useState(false);

	// start typing once the window scrolls into view. Anyone who has asked
	// for reduced motion skips straight to the finished transcript.
	useEffect(() => {
		if (!lines) return;

		const el = cardRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;

				setHasStarted(true);

				// reduced motion still gets the transcript, just all at
				// once. Decided here rather than in the effect body so the
				// state change stays inside a subscription callback.
				if (
					window.matchMedia("(prefers-reduced-motion: reduce)")
						.matches
				) {
					setLineIndex(lines.length);
				}

				observer.disconnect();
			},
			{ threshold: 0.3 }
		);
		observer.observe(el);

		return () => observer.disconnect();
	}, [lines]);

	// one timer per step: type a character, print the output, move on
	useEffect(() => {
		if (!lines || !hasStarted || lineIndex >= lines.length) return;

		const { command } = lines[lineIndex];
		let timer;

		if (charCount < command.length) {
			timer = setTimeout(() => setCharCount((c) => c + 1), CHAR_MS);
		} else if (!isOutputShown) {
			timer = setTimeout(() => setIsOutputShown(true), OUTPUT_MS);
		} else {
			timer = setTimeout(() => {
				setLineIndex((i) => i + 1);
				setCharCount(0);
				setIsOutputShown(false);
			}, LINE_MS);
		}

		return () => clearTimeout(timer);
	}, [lines, hasStarted, lineIndex, charCount, isOutputShown]);

	return (
		<div
			ref={cardRef}
			className="overflow-hidden rounded-lg border border-line bg-surface text-base">
			<div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
				<span
					aria-hidden="true"
					className="h-2.5 w-2.5 rounded-full bg-primary"
				/>
				<span
					aria-hidden="true"
					className="h-2.5 w-2.5 rounded-full bg-secondary"
				/>
				<span
					aria-hidden="true"
					className="h-2.5 w-2.5 rounded-full bg-cyan"
				/>
				<p className="ml-2 font-mono text-xs text-faint">{path}</p>
			</div>

			{lines ? (
				<dl className="flex flex-col gap-3 p-4 font-mono text-xs sm:text-sm">
					{lines.map(({ command, output }, index) => {
						const isDone = index < lineIndex;
						const isActive = index === lineIndex;
						const isPending = index > lineIndex;

						// `invisible` rather than unmounting, so the window
						// is its full height from the first frame and the
						// page below it never shifts as lines arrive
						const typed = isActive
							? command.slice(0, charCount)
							: command;
						const isOutputVisible =
							isDone || (isActive && isOutputShown);

						return (
							// dl > div > dt/dd is valid HTML5 and keeps each
							// command grouped with its own output
							<div
								key={command}
								className={`flex flex-col gap-1 ${
									isPending ? "invisible" : ""
								}`}>
								<dt className="text-faint">
									<span
										aria-hidden="true"
										className="text-secondary">
										${" "}
									</span>
									{typed}
									{isActive && !isOutputVisible && (
										<span
											aria-hidden="true"
											className="animate-blink ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-0.5 bg-secondary"
										/>
									)}
								</dt>
								{(Array.isArray(output) ? output : [output]).map(
									(line) => (
										<dd
											key={line}
											className={`text-heading ${
												isOutputVisible
													? ""
													: "invisible"
											}`}>
											{line}
										</dd>
									)
								)}
							</div>
						);
					})}
				</dl>
			) : (
				children
			)}
		</div>
	);
};

TerminalCard.propTypes = {
	path: PropTypes.string.isRequired,
	lines: PropTypes.arrayOf(
		PropTypes.shape({
			command: PropTypes.string.isRequired,
			output: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.arrayOf(PropTypes.string)
			]).isRequired
		})
	),
	children: PropTypes.node
};

export default TerminalCard;
