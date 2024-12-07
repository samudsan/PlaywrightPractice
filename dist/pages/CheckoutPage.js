"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPage = void 0;
const BasePage_1 = require("./BasePage");
class CheckoutPage extends BasePage_1.BasePage {
    cartItemSelector = '.cart-item';
    checkoutButtonSelector = '#checkout';
    async verifyCartItemsCount(expectedCount) {
        const items = await this.page.$$(this.cartItemSelector);
        return items.length === expectedCount;
    }
    async proceedToCheckout() {
        await this.clickElement(this.checkoutButtonSelector);
    }
}
exports.CheckoutPage = CheckoutPage;
