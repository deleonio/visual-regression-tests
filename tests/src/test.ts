import { expect, test } from '@playwright/test';
// import { checkA11y, injectAxe } from 'axe-playwright';

// https://www.npmjs.com/package/@axe-core/playwright
// https://github.com/abhinaba-ghosh/axe-playwright
// https://playwrightsolutions.com/is-it-possible-to-use-playwright-to-do-accessibility-testing/

export const createTest = (title: string, url: string) => {
	test(title, async ({ page }) => {
		await page.goto(url);
		await page.waitForSelector(`body`);
		await page.waitForTimeout(2000);
		await expect(page).toHaveScreenshot({
			fullPage: true,
		});
		// await injectAxe(page);
		// await checkA11y(page, undefined, {
		// 	axeOptions: {
		// 		runOnly: {
		// 			type: 'tag',
		// 			values: ['best-practices', 'wcag2a', 'wcag2aa', 'wcag21aa'],
		// 		},
		// 	},
		// 	detailedReport: true,
		// 	detailedReportOptions: {
		// 		html: true,
		// 	},
		// });
	});
};

// test('Visit home page and run an axe test @axe', async ({ page }, testInfo) => {
// 	await page.goto('https://broken-workshop.dequelabs.com/');

// 	//Analyze the page with axe
// 	const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

// 	//Attached the violations to the test report
// 	await testInfo.attach('accessibility-scan-results', {
// 		body: JSON.stringify(accessibilityScanResults.violations, null, 2),
// 		contentType: 'application/json',
// 	});

// 	//Console log the violations
// 	const violation = accessibilityScanResults.violations;
// 	violation.forEach(function (entry) {
// 		console.log(`${entry.impact as string} ${entry.description}`);
// 	});

// 	//Expect violations to be empty
// 	// expect(accessibilityScanResults.violations).toEqual([]);
// });
