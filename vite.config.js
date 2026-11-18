import adapter from '@sveltejs/adapter-auto';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { createViteLicensePlugin } from 'rollup-license-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		createViteLicensePlugin({
			outputFilename: 'licenses/oss-licenses.json',
			includePackages: () => [new URL('node_modules/typescript', import.meta.url).pathname]
		}),
		tailwindcss(),
		sveltekit({ adapter: adapter(), alias: { $lib: 'src/lib' } })
	]
});
