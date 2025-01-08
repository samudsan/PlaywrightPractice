import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private cartItemSelector = '.cart_item';
  private checkoutButtonSelector = '#checkout';
  private checkoutLink = ".shopping_cart_link";
  private addItem = "[data-test=add-to-cart-sauce-labs-backpack]";

  async verifyCartItemsCount(expectedCount: number): Promise<boolean> {
    const items = await this.page.$$(this.cartItemSelector);
    return items.length === expectedCount;
  }

  async addItemToCart() : Promise<void>{
    await this.page.locator(this.addItem).click();
  }

  async clickOnCartLink(){
    await this.page.locator(this.checkoutLink).click();
  }

  async proceedToCheckout() {
    await this.clickElement(this.checkoutButtonSelector);
  }
}
