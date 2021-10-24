const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			'sm': '560px',
			'md': '720px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
	  },
		extend: {
			backgroundImage: {
				'home-desktop':"url('/home/background-home-desktop.jpg')",
				'home-tablet':"url('/home/background-home-tablet.jpg')",
				'home-mobile' : "url('/home/background-home-mobile.jpg')"
			}
		}
	},

	plugins: []
};

module.exports = config;
