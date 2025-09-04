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
				'custom-gray-dark': '#0D0D0D',
				'blue-600-aaa': '#1e48c7',
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
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.35s ease-out forwards',
			},
		},
	},
	plugins: [],
};
