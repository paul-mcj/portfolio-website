// prop types
import PropTypes from "prop-types";

// next
import Link from "next/link";

// one class string shared by every variant, so a link-flavoured CTA and a
// real <button> are pixel-identical. Nesting a <button> inside an <a> is
// invalid HTML, so passing `href` renders the anchor itself rather than
// wrapping one around a button.
const baseClasses =
	"inline-flex w-fit items-center justify-center gap-x-2 py-3 px-6 font-mono font-bold transition-opacity duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const enabledClasses = "bg-primary text-background hover:opacity-90 cursor-pointer";

const disabledClasses = "bg-primary/50 text-background/70 cursor-not-allowed";

const CallToActionButton = ({
	children,
	width,
	handleOnClick,
	disabled,
	href,
	external,
	ariaLabel
}) => {
	const classes = `${baseClasses} ${width ?? ""} ${
		disabled ? disabledClasses : enabledClasses
	}`;

	// external links leave the site, internal ones go through next/link
	if (href) {
		return external ? (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ariaLabel}
				className={classes}>
				{children}
			</a>
		) : (
			<Link
				href={href}
				aria-label={ariaLabel}
				className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled}
			onClick={handleOnClick}
			aria-label={ariaLabel}
			className={classes}>
			{children}
		</button>
	);
};

CallToActionButton.propTypes = {
	width: PropTypes.string,
	handleOnClick: PropTypes.func,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	external: PropTypes.bool,
	ariaLabel: PropTypes.string
};

export default CallToActionButton;
