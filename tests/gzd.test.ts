import { expect, test } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';

test(`GZD > Registrierung`, async ({ page }) => {
	await page.goto(`https://www.zoll-portal.de/registrierung/benutzerkonto/daten`);
	await page.waitForSelector('#RID_01_02_008 a');
	await page.getByText('Benutzerkonto für ein bestehendes Geschäftskundenkonto').click();
	await page.waitForSelector('[data-startseite="alternativContainer"] a');
	await page.getByText('mit E-Mail und Passwort registrieren').click();
	// await page.waitForTimeout(1000);
	await expect(page).toHaveScreenshot({
		fullPage: true,
	});
	await injectAxe(page);
	await checkA11y(page, undefined, {
		axeOptions: {
			runOnly: {
				type: 'tag',
				values: ['best-practices', 'wcag2a', 'wcag2aa', 'wcag21aa'],
			},
		},
		detailedReport: true,
		detailedReportOptions: {
			html: true,
		},
	});
});
