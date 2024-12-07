import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestDataManager } from '../utils/testDataManager';

const testData = TestDataManager.readJSON('./src/config/testData.json');

test.describe('Login Page Tests', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('');
    await loginPage.login(testData.users.validUser.username, testData.users.validUser.password);
    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('');
    await loginPage.login(testData.users.invalidUser.username, testData.users.invalidUser.password);
    const actualErrorText = await loginPage.getLoginErrorText();
    expect(actualErrorText).toContain('Username and password do not match any user');
  });
});
