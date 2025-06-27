/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Roboto', 'sans-serif'],
			},
			colors: {
				'custom-gray': '#121212',
				'custom-gray-dark': '#0d0d0d',
				'elevation-100': '#1D1D1D',
				'elevation-200': '#1E1E1E',
				'elevation-300': '#1F1F1F',
			},
			objectPosition: {
				'custom-top': '50% 30%',
			},
			borderRadius: {
				inherit: 'inherit',
			},
		},
	},
	plugins: [],
};
