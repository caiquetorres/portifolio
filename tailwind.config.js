/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat'],
			code: ['Inconsolata'],
			cursive: ['Kalam']
		},
		extend: {
			maxWidth: {
				blog: '760px',
				content: '1170px'
			},
			colors: {
				charcoal: '#2F4550',
				seasalt: '#F9F9F9',
				night: '#151922',
				cordovan: '#904E55',
				silver: '#CACACA'
			}
		}
	},
	plugins: []
};
