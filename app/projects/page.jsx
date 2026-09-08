// components
import PrimarySectionHeader from "@/components/layout/PrimarySectionHeader";
import ProjectSection from "@/components/layout/ProjectSection";
import PromptUserAlert from "@/components/assets/PromptUserAlert";

// data
import projects from "@/store/projects.mjs";

// seo
import { SITE_NAME, defaultOpenGraphImage } from "@/store/seo.mjs";

const description =
	"Selected work by Paul McJannet - a Next.js company site on a reusable client template, a serverless AI voice booking agent, a Django REST and React recipe app, and a voice-controlled browser game.";

export const metadata = {
	title: "Projects",
	description,
	alternates: { canonical: "/projects" },
	openGraph: {
		type: "website",
		url: "/projects",
		siteName: SITE_NAME,
		title: "Projects | Paul McJannet",
		description,
		locale: "en_CA",
		images: [defaultOpenGraphImage]
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects | Paul McJannet",
		description,
		images: [defaultOpenGraphImage.url]
	}
};

const ProjectsPage = () => {
	return (
		<>
			<section className="flex flex-col gap-y-8 text-left">
				<div className="w-full">
					<p className="font-mono text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
						{"// projects"}
					</p>
					<PrimarySectionHeader title="My Projects" />
				</div>
				<p className="text-muted max-w-2xl">
					A few things I have built recently, and what was actually
					interesting about each of them. Some of this work lives in
					private repositories, so those writeups describe the
					architecture and the reasoning rather than linking to
					source.
				</p>
				{projects.map((project, index) => (
					<ProjectSection
						key={project.slug}
						index={index}
						{...project}
					/>
				))}
			</section>
			<section className="flex flex-col gap-y-8">
				<PromptUserAlert />
			</section>
		</>
	);
};

export default ProjectsPage;
