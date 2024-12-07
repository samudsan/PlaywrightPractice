"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const test_1 = require("@playwright/test");
exports.test = test_1.test.extend({
    browser: async ({}, use) => {
        const browser = await test_1.chromium.launch({ headless: true });
        await use(browser);
        await browser.close();
    },
    page: async ({ browser }, use) => {
        const page = await browser.newPage();
        await use(page);
        await page.close();
    },
});
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
