// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import CallToActionButton from "@/components/assets/CallToActionButton";
import SecondaryHeader from "@/components/layout/SecondaryHeader";

const NotFound = () => {
	return (
		<section className="grid place-items-center text-center gap-y-16">
			<div className="flex flex-col gap-y-4">
				<PrimarySectionHeader title="404 Error" />
				<SecondaryHeader title="page not found" />
				<p className="text-muted">
					Looks like you&apos;re lost! This page cannot be found...
				</p>
			</div>
			<CallToActionButton href="/">./go-home</CallToActionButton>
		</section>
	);
};

export default NotFound;
