import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Page Tests', () => {
  test('Verify cart item count', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.navigateTo('inventory.html');
    await checkoutPage.addItemToCart();
    await checkoutPage.clickOnCartLink();
    const isCartCountValid = await checkoutPage.verifyCartItemsCount(1);
    expect(isCartCountValid).toBeTruthy();
  });

  test('Proceed to checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.navigateTo('cart.html');
    await checkoutPage.proceedToCheckout();
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  });
});
