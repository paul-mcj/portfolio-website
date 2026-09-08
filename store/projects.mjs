// single source of truth for both the homepage cards and the /projects
// sections - the homepage renders `tagline`/`summary`, the projects page
// adds `overview`, `highlights` and `challenge`. Order here is the order
// shown in both places.
//
// Only public-facing detail belongs in this file. Two of these projects
// live in private repos, so the writeups describe architecture and the
// reasoning behind it - never secrets, infrastructure identifiers, or
// known gaps.

const projects = [
	{
		slug: "volinix-studio",
		title: "Volinix Studio",
		tagline: "// Company website",
		period: "2026",
		status: "live",
		stack: ["next.js", "typescript", "tailwindcss", "cloudflare"],
		summary: "The Volinix Studio company site, built on a reusable project template that drives page metadata, structured data and sitemaps from a single client config.",
		overview:
			"Volinix Studio builds websites for small businesses in Ontario. This is the studio's own site built with the same template that every client website starts from.",
		highlights: [
			"Multi-page Next.js App Router site generating page metadata, JSON-LD structured data and sitemaps from one per-client config file",
			"Contact submissions post to a token-authenticated Cloudflare Worker, so the credential never reaches the browser",
			"Images served through a Cloudflare Images loader",
			"GitHub Actions CI enforces performance, accessibility and security budgets on every pull request"
		],
		challenge: {
			title: "Templates allow for effecient fixes on client repos",
			body: "The constraint that shaped everything was that the template this site was built from had to be reusable. Anything that differs between clones has to become configuration rather than code including things like: name, navigation, brand colours, and contact details. This means that starting a new website for a client is a config edit instead of a fork. That time investment pays for itself since accessibility or security fixes made once in the template can easily reach every site built from it."
		},
		links: [{ label: "Live site", href: "https://www.volinix.ca/" }]
	},
	{
		slug: "ai-voice-agent",
		title: "AI Voice Agent",
		tagline: "// AI appointment booking assistant",
		period: "2026",
		status: "live",
		stack: ["javascript", "node.js", "cloudflare", "sqlite", "vapi"],
		summary: "Serverless webhooks powering an AI phone agent that books, reschedules and cancels service calls for small businesses.",
		overview:
			"A voice agent that answers the phone for a service business and handles the booking conversation end to end including: checking availability, booking, rescheduling, cancelling, and handing off to a human when the call needs one.",
		highlights: [
			"A single authenticated endpoint receives every webhook, normalizes inconsistent payloads, and dispatches to dependency-injected tool handlers",
			"Multi-tenant routing resolves the business from the call itself and directs each one to its own isolated database",
			"Double-booking prevention and availability rules live in the backend rather than the prompt",
			"Vitest suite runs inside the real serverless runtime against a live database binding, rebuilding schema on each run"
		],
		challenge: {
			title: "Keeping latency in check is crucial",
			body: "On a phone call, even a small pause can cause confusion, frustration or annoyance. That obstacle pushed nearly every decision in the same direction: keep the model small and the backend smart. The original multi-step logic (i.e. calling one tool, then reading the result, then calling another tool, etc.) was re-configured so that agents use a single round trip for everything, because every extra hop is audible dead air. The end result is that anything that can be decided by code is decided by code, so the model only has to focus on talking."
		},
		links: [
			{
				label: "Live demo",
				href: "https://www.volinix.ca/services/ai-voice-agents"
			}
		]
	},
	{
		slug: "fodmap-recipe-app",
		title: "FODMAP Recipe App",
		tagline: "// Full-stack recipe sharing application",
		period: "2025",
		status: "in development",
		stack: ["react", "vite", "tailwindcss", "django", "postgresql"],
		summary: "A Django REST and React application where people following a FODMAP diet track food reactions and share recipes.",
		overview:
			"Following a low-FODMAP diet means working out which foods you personally react to. The app is built around that and lets users log reactions, build up a picture of safe foods and triggers, and share recipes with people solving the same problem.",
		highlights: [
			"Django REST Framework backend with JWT-authenticated registration and login",
			"Relational PostgreSQL model spanning users, foods, journal entries, blog posts and comments",
			"React and Vite frontend consuming the secured API"
		],
		challenge: {
			title: "Consistent schemas are important from the start",
			body: "Most of the work for this project was in setting up the data models. A food reaction belongs to a user and to a food, and a comment belongs to a post and to a user. Getting those relationships and how they behave was necessary from the start. It is much easier than migrating around them once there is data to preserve."
		},
		links: [
			{
				label: "GitHub",
				href: "https://github.com/paul-mcj/fodmap_app"
			}
		]
	},
	{
		slug: "speech-recognition-maze",
		title: "Speech Recognition Maze",
		tagline: "// Voice-controlled browser game",
		period: "2023",
		status: "live",
		stack: ["react", "vite", "tailwindcss", "tensorflow"],
		summary: "A browser maze game played entirely by voice, where a speech model classifies spoken direction commands in real time.",
		overview:
			"Randomly generated mazes that you solve by speaking. An audio model listens through the microphone and classifies spoken commands (e.g. “up”, “left”, etc.) into player movement, with no keyboard involved.",
		highlights: [
			"Audio classification model built with Google's Teachable Machine and run client-side through TensorFlow.js",
			"Procedural maze generation with state-driven movement and win detection",
			"Responsive Tailwind interface, with confetti on completion"
		],
		// no `challenge` here on purpose - ProjectSection skips the block
		// when it is absent, rather than rendering an empty panel
		links: [
			{
				label: "GitHub",
				href: "https://github.com/paul-mcj/Speech-Recognition-Maze"
			},
			{
				label: "Live demo",
				href: "https://speech-recognition-maze.vercel.app/"
			}
		]
	}
];

export default projects;
