import { expect, test } from '@playwright/test';
// import { checkA11y, injectAxe } from 'axe-playwright';

// https://www.npmjs.com/package/@axe-core/playwright
// https://github.com/abhinaba-ghosh/axe-playwright
// https://playwrightsolutions.com/is-it-possible-to-use-playwright-to-do-accessibility-testing/

const TEST_CASES = new Map<string, Set<string>>();
TEST_CASES.set('abbr', new Set(['basic']));
TEST_CASES.set('accordion', new Set(['basic', 'header', 'headlines']));
TEST_CASES.set('alert', new Set(['basic', 'card-msg', 'html']));
TEST_CASES.set('badge', new Set(['basic', 'button']));
TEST_CASES.set('breadcrumb', new Set(['basic']));
TEST_CASES.set('button', new Set(['basic', 'icon-only', 'icons', 'width']));
TEST_CASES.set('button-group', new Set(['basic']));
TEST_CASES.set('button-link', new Set(['basic', 'icons', 'image', 'target']));
TEST_CASES.set('card', new Set(['basic', 'confirm', 'flex', 'selection']));
TEST_CASES.set('details', new Set(['basic']));
// TEST_CASES.set('form', new Set(['basic']));
TEST_CASES.set('heading', new Set(['basic', 'badged', 'paragraph']));
TEST_CASES.set('icon', new Set(['basic']));
TEST_CASES.set('indented-text', new Set(['basic']));
// TEST_CASES.set('input-checkbox', new Set(['basic']));
// TEST_CASES.set('input-color', new Set(['basic']));
// TEST_CASES.set('input-date', new Set(['basic']));
// TEST_CASES.set('input-email', new Set(['basic']));
// TEST_CASES.set('input-file', new Set(['basic']));
// TEST_CASES.set('input-number', new Set(['basic']));
// TEST_CASES.set('input-password', new Set(['basic']));
// TEST_CASES.set('input-range', new Set(['basic']));
// TEST_CASES.set('input-text', new Set(['basic']));
TEST_CASES.set('link', new Set(['basic', 'icons', 'image', 'target']));
TEST_CASES.set('link-button', new Set(['basic']));
// TEST_CASES.set('link-group', new Set(['basic']));
TEST_CASES.set('nav', new Set(['basic', 'horizontal']));
TEST_CASES.set('pagination', new Set(['basic']));
TEST_CASES.set('progress', new Set(['basic']));
// TEST_CASES.set('select', new Set(['basic']));
TEST_CASES.set('skip-nav', new Set(['basic']));
TEST_CASES.set('spin', new Set(['basic']));
TEST_CASES.set('table', new Set(['render-cell', 'sort-date']));
TEST_CASES.set('textarea', new Set(['basic', 'adjust-height', 'disabled', 'placeholder', 'readonly', 'resize', 'rows']));
// TEST_CASES.set('toast', new Set(['basic']));
TEST_CASES.set('tooltip', new Set(['basic']));
TEST_CASES.set('version', new Set(['basic', 'context']));

const THEME_CASES = new Set(['bmf', 'desy', 'mapz', 'th', 'zoll']);

THEME_CASES.forEach((themeName) => {
	TEST_CASES.forEach((value, componentName) => {
		value.forEach((testName) => {
			test(`${themeName}: ${componentName} > ${testName}`, async ({ page }) => {
				await page.goto(`https://w5u37c.csb.app/#/${componentName}/${testName}?theme=${themeName}`);
				await page.waitForSelector('body');
				await page.waitForSelector(`kol-${componentName}`);
				// await page.waitForTimeout(1000);
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
		});
	});
});

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
