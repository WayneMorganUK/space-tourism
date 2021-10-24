import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	}
};

export default config;
