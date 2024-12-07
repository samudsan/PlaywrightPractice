"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const BasePage_1 = require("./BasePage");
class HomePage extends BasePage_1.BasePage {
    welcomeTextSelector = 'h1';
    async getWelcomeText() {
        return this.getText(this.welcomeTextSelector);
    }
    async navigateToHome() {
        await this.navigateTo('/');
    }
}
exports.HomePage = HomePage;
