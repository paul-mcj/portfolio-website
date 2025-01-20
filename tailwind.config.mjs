import { transform } from "next/dist/build/swc/generated-native";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	// for badges
	safelist: [
		"bg-orange-400",
		"bg-blue-400",
		"bg-yellow-400",
		"bg-violet-400",
		"bg-amber-400",
		"bg-cyan-400",
		"bg-sky-400",
		"bg-emerald-400",
		"bg-lime-400",
		"bg-rose-400",
		"bg-indigo-400",
		"bg-pink-400",
		"bg-stone-400",
		"bg-red-400",

		"border-orange-600",
		"border-blue-600",
		"border-yellow-600",
		"border-violet-600",
		"border-amber-600",
		"border-cyan-600",
		"border-sky-600",
		"border-emerald-600",
		"border-lime-600",
		"border-rose-600",
		"border-indigo-600",
		"border-pink-600",
		"border-stone-600",
		"border-red-600",

		"text-orange-900",
		"text-blue-900",
		"text-yellow-900",
		"text-violet-900",
		"text-amber-900",
		"text-cyan-900",
		"text-sky-900",
		"text-emerald-900",
		"text-lime-900",
		"text-rose-900",
		"text-indigo-900",
		"text-pink-900",
		"text-stone-900",
		"text-red-900"
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				primary_tint: "var(--primary_tint)",
				primary_tint_2: "var(--primary_tint_2)",
				primary_tint_3: "var(--primary_tint_3)",
				primary_tone: "var(--primary_tone)",
				secondary: "var(--secondary)"
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
				merriweather: ["Merriweather", "serif"]
			},
			animation: {
				// slideshow
				fade_out: "fade_out 5.0s ease-in-out",

				// nav menu enter
				roll_down: "roll_down 0.5s cubic-bezier(0,1,1,1)",
				flip_down: "flip_down 0.5s ease-in",
				home_delay_enter: "flip_down 0.25s ease-in",
				about_delay_enter: "flip_down 0.5s ease-in",
				projects_delay_enter: "flip_down 0.75s ease-in",
				contact_delay_enter: "flip_down 1s ease-in",

				// nav menu exit
				roll_up: "roll_up 0.5s cubic-bezier(0,0,1,-1)",
				flip_up: "flip_up 0.5s ease-out",
				home_delay_exit: "flip_up 1s ease-out",
				about_delay_exit: "flip_up 0.75s ease-out",
				projects_delay_exit: "flip_up 0.5s ease-out",
				contact_delay_exit: "flip_up 0.25s ease-out",

				// about me span:
				about_me: "about_me 1s ease-in-out infinite",

				// primary section header
				primary_header_enter: "primary_header_enter 1s ease-in-out"
			},
			keyframes: {
				// slideshow
				fade_out: {
					"0%": { opacity: "0" },
					"25%": { opacity: "1" },
					"75%": { opacity: "1" },
					"100%": { opacity: "0" }
				},

				// nav menu enter
				roll_down: {
					"0%": { transform: "translateY(-100%)" },
					"90%": { transform: "translateY(10%) " },
					"100%": { transform: "translateY(0) " }
				},
				flip_down: {
					"0%": { transform: "rotateX(90deg)", opacity: "0" },
					"100%": { transform: "rotateX(0deg)", opacity: "1" }
				},

				// nav menu exit
				roll_up: {
					"0%": { transform: "translateY(0%)" },
					"10%": { transform: "translateY(10%) " },
					"100%": {
						transform: "translateY(-100%)"
					}
				},
				flip_up: {
					"0%": { transform: "rotateX(0deg)", opacity: "1" },
					"100%": { transform: "rotateX(90deg)", opacity: "0" }
				},

				// about me span:
				about_me: {
					"0%": { transform: "skewX(-12deg)" },
					"12%": { transform: "skewX(-6deg)", scale: "1.1" },
					"25%": { transform: "skewX(0deg)" },
					"37%": { transform: "skewX(6deg)" },
					"50%": { transform: "skewX(12deg)" },
					"62%": { transform: "skewX(6deg)" },
					"75%": { transform: "skewX(0deg)" },
					"87%": { transform: "skewX(-6deg)", scale: "0.9" },
					"100%": { transform: "skewX(-12deg)" }
				},

				// primary section header
				primary_header_enter: {
					"0%": { transform: "skewX(0deg)" },
					"25%": { transform: "skewX(6deg)", scale: "1.1" },
					"50%": { transform: "skewX(12deg)" },
					"75%": { transform: "skewX(6deg)", scale: "0.9" },
					"100%": { transform: "skewX(0deg)", scale: "1" }
				}
			},
			boxShadow: {
				cta: "0 20px 10px -10px",
				cta_grow: "0 25px 20px -5px rgb(37, 70, 91)"
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".animate-forwards": {
					animationFillMode: "forwards"
				}
			});
		}
	]
};
