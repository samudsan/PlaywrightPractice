import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private cartItemSelector = '.cart-item';
  private checkoutButtonSelector = '#checkout';

  async verifyCartItemsCount(expectedCount: number): Promise<boolean> {
    const items = await this.page.$$(this.cartItemSelector);
    return items.length === expectedCount;
  }

  async proceedToCheckout() {
    await this.clickElement(this.checkoutButtonSelector);
  }
}
