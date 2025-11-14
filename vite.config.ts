import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Production optimizations (enabled by default when NODE_ENV=production)
		minify: 'esbuild',
		sourcemap: false
	}
});
