import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
  test('Validate welcome text', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    const welcomeText = await page.title();
    expect(welcomeText).toBe('Swag Labs');
  });
});
