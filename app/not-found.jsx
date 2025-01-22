// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import CallToActionButton from "@/components/assets/CallToActionButton";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

// next
import Link from "next/link";

const NotFound = () => {
	return (
		<section className="grid place-items-center text-center gap-y-32 mt-16 text-background">
			<div className="flex flex-col gap-y-8">
				<PrimarySectionHeader title="404 Error" />
				<SecondaryHeader title="Page Not Found" />
				<p>Looks like you're lost! This page cannot be found...</p>
			</div>
			<Link href="/">
				<CallToActionButton>Go Home</CallToActionButton>
			</Link>
		</section>
	);
};

export default NotFound;
