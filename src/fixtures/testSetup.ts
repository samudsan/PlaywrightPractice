import { test as base, chromium, Browser, Page } from '@playwright/test';

type TestFixtures = {
  browser: Browser;
  page: Page;
};

export const test = base.extend<TestFixtures>({
  browser: async ({}, use: (browser: Browser) => Promise<void>) => {
    const browser = await chromium.launch({ headless: true });
    await use(browser);
    await browser.close();
  },
  page: async ({ browser }, use: (page: Page) => Promise<void>) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
});

export { expect } from '@playwright/test';
