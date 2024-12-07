"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const testDataManager_1 = require("../utils/testDataManager");
const testData = testDataManager_1.TestDataManager.readJSON('./src/config/testData.json');
test_1.test.describe('Login Page Tests', () => {
    (0, test_1.test)('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage_1.LoginPage(page);
        await loginPage.navigateTo('/login');
        await loginPage.login(testData.users.validUser.username, testData.users.validUser.password);
        (0, test_1.expect)(await page.url()).toBe('https://example.com/dashboard');
    });
    (0, test_1.test)('Login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage_1.LoginPage(page);
        await loginPage.navigateTo('/login');
        await loginPage.login(testData.users.invalidUser.username, testData.users.invalidUser.password);
        const errorText = await page.textContent('.error-message');
        (0, test_1.expect)(errorText).toBe('Invalid username or password');
    });
});
