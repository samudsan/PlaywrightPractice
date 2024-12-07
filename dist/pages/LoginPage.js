"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
class LoginPage extends BasePage_1.BasePage {
    usernameSelector = '#username';
    passwordSelector = '#password';
    loginButtonSelector = '#login';
    async login(username, password) {
        await this.fillInput(this.usernameSelector, username);
        await this.fillInput(this.passwordSelector, password);
        await this.clickElement(this.loginButtonSelector);
    }
}
exports.LoginPage = LoginPage;
