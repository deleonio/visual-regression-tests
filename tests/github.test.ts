import { expect, test } from '@playwright/test';

for(let i = 1; i <= 3; i++) {
	test(`GitHub: Public UI > Follower - Page ${i}`, async ({ page }) => {
		await page.goto(`https://github.com/orgs/public-ui/followers?page=${i}`);
		await page.waitForSelector('footer');
		await expect(page).toHaveScreenshot({
			fullPage: true,
		});
	});
	test(`GitHub: Public UI > KoliBri > Follower - Page ${i}`, async ({ page }) => {
		await page.goto(`https://github.com/public-ui/kolibri/stargazers?page=${i}`);
		await page.waitForSelector('footer');
		await expect(page).toHaveScreenshot({
			fullPage: true,
		});
	});
}
