/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		vitePreprocess({
			style: true, // default value
			script: false // default value
		})
	]
};

export default config;
