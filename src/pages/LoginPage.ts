import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private locUserNameID =  '#user-name';
  private locPasswordID =  '#password';
  private locLoginButtonID =  '#login-button';
  private errorText = 'h3[data-test="error"]'

  async login(username: string, password: string) {
    await this.fillInput(this.locUserNameID, username);
    await this.fillInput(this.locPasswordID, password);
    await this.clickElement(this.locLoginButtonID);
  }

  async getLoginErrorText(){
     const errorMessage = await this.page.textContent(this.errorText);
     return errorMessage || '';
  }
}
