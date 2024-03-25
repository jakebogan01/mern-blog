import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				secure: false,
			}
		},
	},
	plugins: [sveltekit(), purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/],
			},
		}),
	],
});