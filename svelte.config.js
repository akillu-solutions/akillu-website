import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404 errors for paths that don't begin with base when base path is set
				// This happens during prerendering when base path is configured for GitHub Pages
				// Static assets and root paths are handled correctly at runtime
				if (process.env.GITHUB_REPOSITORY) {
					const base = `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`;
					// Allow paths that don't start with base (they'll be handled correctly at runtime)
					if (!path.startsWith(base)) {
						return;
					}
				}
				// For other errors, throw to fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
