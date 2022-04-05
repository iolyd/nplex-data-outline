import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		paths: {
			base: process.env.PUBLIC_BASE_PATH || ''
		},
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('src/components'),
					$data: path.resolve('src/data'),
					$stores: path.resolve('src/stores')
				}
			},
		}
	}
};

export default config;
