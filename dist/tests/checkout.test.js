"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const CheckoutPage_1 = require("../pages/CheckoutPage");
test_1.test.describe('Checkout Page Tests', () => {
    (0, test_1.test)('Verify cart item count', async ({ page }) => {
        const checkoutPage = new CheckoutPage_1.CheckoutPage(page);
        await checkoutPage.navigateTo('/checkout');
        const isCartCountValid = await checkoutPage.verifyCartItemsCount(3);
        (0, test_1.expect)(isCartCountValid).toBeTruthy();
    });
    (0, test_1.test)('Proceed to checkout', async ({ page }) => {
        const checkoutPage = new CheckoutPage_1.CheckoutPage(page);
        await checkoutPage.navigateTo('/checkout');
        await checkoutPage.proceedToCheckout();
        (0, test_1.expect)(page.url()).toBe('https://example.com/confirmation');
    });
});
