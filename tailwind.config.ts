/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				yellow: "#F5BE49",
				black: "#272727",
				darkSecondary: "#0A0A0A",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				zeyada: ["Zeyada", "cursive"],
			},
			typography: ({ theme }: any) => ({
				blog: {
					css: {
						"--tw-prose-a-text": theme("colors.blue[100]"),
						"--tw-prose-headings": theme("colors.white"),
						"--tw-prose-blockquote": theme("colors.mediumpurple[200]"),
						"--tw-prose-links": theme("colors.blue[400]"),
						"--tw-prose-bold": theme("colors.white"),
						"--tw-prose-hr": theme("colors.white"),
						"--tw-prose-code": theme("colors.blogcode[100]"),
						"--tw-prose-quotes": theme("colors.gray[300]"),
						"--tw-prose-quote-borders": theme("colors.gray[500]"),
						"--tw-prose-counters": theme("colors.gray[400]"),
					},
				},
			}),
		},
	},
	plugins: [
		// require("@tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};

export default config;
