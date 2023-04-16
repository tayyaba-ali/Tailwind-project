/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
		// screens: {
		// 	sm: '480px',
		// 	md: '768px',
		// 	lg: '976px',
		// 	xl: '1440px',
		// },
		extend: {
			colors: {
				'bookmark-purple': '#5267DF',
				'bookmark-red': '#FA5959',
				'bookmark-blue': '#242A45',
				'bookmark-grey': '#9194A2',
				'bookmark-white': '#f7f7f7',
			},
		},
		fontFamily: {
			Poppins: 'Poppins,sans-serif',
		},
	},
	plugins: [],
};

