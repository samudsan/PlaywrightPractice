"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
class BasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async getText(selector) {
        return (await this.page.textContent(selector)) || '';
    }
    async clickElement(selector) {
        await this.page.click(selector);
    }
    async fillInput(selector, text) {
        await this.page.fill(selector, text);
    }
}
exports.BasePage = BasePage;
