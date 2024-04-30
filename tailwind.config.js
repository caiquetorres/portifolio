/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxWidth: {
				content: '1170px'
			},
			colors: {
				cordovan: '#904E55',
				charcoal: '#2F4550',
				'paynes-gray': '#586F7C',
				silver: '#CBBFBB',
				'floral-white': '#FFF8F0',
				seasalt: '#F9F9F9'
			}
		}
	},
	plugins: []
};
