import { defineConfig } from '@playwright/test';

export default defineConfig({
	use: {
		headless: true,
		reporter: [[process.env.CI ? 'dot' : 'list'], ['html', { outputFolder: 'my-report' }], ['json', { outputFile: 'results.json' }]],
		toMatchSnapshot: {
			maxDiffPixelRatio: 0.03,
		},
		ignoreHTTPSErrors: true,
		retries: 3,
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure',
		video: 'on-first-retry',
	},
});
