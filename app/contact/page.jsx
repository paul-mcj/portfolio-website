// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import CallToActionButton from "@/components/assets/CallToActionButton";
import TerminalCard from "@/components/layout/TerminalCard";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons";

// seo
import { SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

const EMAIL = "mcjannetp@gmail.com";

// every way to reach me, rendered as one list. `value` is what the row shows
// in monospace - the handle rather than the full URL, which keeps the rows
// scannable and stops long hrefs wrapping on mobile.
const channels = [
	{
		icon: faEnvelope,
		label: "Email",
		value: EMAIL,
		href: `mailto:${EMAIL}`,
		ariaLabel: `Send an email to ${EMAIL}`
	},
	{
		icon: faGithub,
		label: "GitHub",
		value: "@paul-mcj",
		href: "https://github.com/paul-mcj/",
		external: true,
		ariaLabel: "Visit GitHub profile page for Paul McJannet"
	},
	{
		icon: faLinkedinIn,
		label: "LinkedIn",
		value: "in/paul-mcjannet",
		href: "https://www.linkedin.com/in/paul-mcjannet/",
		external: true,
		ariaLabel: "Visit LinkedIn profile page for Paul McJannet"
	},
	{
		icon: faBriefcase,
		label: "Studio",
		value: "volinix.ca",
		href: "https://www.volinix.ca/",
		external: true,
		ariaLabel: "Visit Volinix Studio, Paul's web development company"
	}
];

const description =
	"Get in touch with Paul McJannet, a web developer available for freelance and collaboration opportunities. Connect via email, GitHub or LinkedIn.";

export const metadata = {
	title: "Contact",
	description,
	alternates: { canonical: "/contact" },
	openGraph: {
		type: "website",
		url: "/contact",
		siteName: SITE_NAME,
		title: "Contact Paul McJannet",
		description,
		locale: "en_CA",
		images: [defaultOpenGraphImage]
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Paul McJannet",
		description,
		images: [defaultOpenGraphImage.url]
	}
};

// max-w-136 (544px) is the exact width of the half-column the terminals on the
// home and about pages sit in at xl: the 1280px container less its 5rem side
// padding, less the 2rem grid gap, halved. The named steps straddle it -
// max-w-lg is 32px short and max-w-xl 32px over - so the spacing step is used.
const ContactPage = () => {
	return (
		<section className="flex w-full max-w-136 flex-col gap-y-6 text-left">
			<p className="font-mono text-sm font-semibold text-secondary uppercase tracking-wider">
				{"// contact"}
			</p>
			<PrimarySectionHeader title="Let's work together!" />

			<TerminalCard path="~/paul/contact">
				<ul className="divide-y divide-line">
					{channels.map(
						({
							icon,
							label,
							value,
							href,
							external,
							ariaLabel
						}) => (
							<li key={label}>
								<a
									href={href}
									aria-label={ariaLabel}
									target={
										external
											? "_blank"
											: undefined
									}
									rel={
										external
											? "noopener noreferrer"
											: undefined
									}
									className="group flex items-center gap-4 px-4 py-4 transition-colors duration-200 hover:bg-line focus:outline-hidden focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset">
									<FontAwesomeIcon
										icon={icon}
										className="h-4 w-4 shrink-0 text-faint transition-colors duration-200 group-hover:text-primary"
									/>
									<span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-faint">
										{label}
									</span>
									<span className="truncate font-mono text-sm text-heading transition-colors duration-200 group-hover:text-primary">
										{value}
									</span>
								</a>
							</li>
						)
					)}
				</ul>
			</TerminalCard>

			<div className="mt-6 flex flex-col items-start gap-y-6">
				<p className="inline-flex items-center gap-2 font-mono text-sm text-faint">
					<span
						aria-hidden="true"
						className="animate-blink inline-block h-2 w-2 rounded-full bg-secondary"
					/>
					Currently available for new projects
				</p>
				<CallToActionButton
					href={`mailto:${EMAIL}`}
					external
					ariaLabel={`Send an email to ${EMAIL}`}>
					{"./send-an-email"}
				</CallToActionButton>
			</div>
		</section>
	);
};

export default ContactPage;
