module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				/* START section for config all colors in this project */
				primary: '#066cfa',
				secondary: '#d1d5db',
				borderColor: '#d1d5db',
				headerBackground: '#066cfa',
				headerText: '#ffffff',
				/* END section */
			},
		},
	},
	plugins: [],
}
