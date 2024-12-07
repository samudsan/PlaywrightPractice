import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  async navigateToHome() {
    await this.navigateTo('/');
  }
}
