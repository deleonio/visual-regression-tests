import { expect, test } from '@playwright/test';

test(`GitHub: Public UI > Follower`, async ({ page }) => {
	await page.goto(`https://github.com/orgs/public-ui/followers`);
	await page.waitForSelector('footer');
	await expect(page).toHaveScreenshot({
		fullPage: true,
	});
});
test(`GitHub: Public UI > KoliBri > Follower`, async ({ page }) => {
	await page.goto(`https://github.com/public-ui/kolibri/stargazers`);
	await page.waitForSelector('footer');
	await expect(page).toHaveScreenshot({
		fullPage: true,
	});
});
