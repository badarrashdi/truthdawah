/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' :'#f1c152',
				'secondary': '#737373',
				'body': '#737373',
				'muted': '#6c757d',
				'light': '#f8f9fa',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
