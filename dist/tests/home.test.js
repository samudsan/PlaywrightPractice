"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const HomePage_1 = require("../pages/HomePage");
test_1.test.describe('Home Page Tests', () => {
    (0, test_1.test)('Validate welcome text', async ({ page }) => {
        const homePage = new HomePage_1.HomePage(page);
        await homePage.navigateToHome();
        const welcomeText = await homePage.getWelcomeText();
        (0, test_1.expect)(welcomeText).toBe('Welcome to Example');
    });
});
