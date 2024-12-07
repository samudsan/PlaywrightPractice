import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // Launch a browser instance
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the login page
  console.log('Logging in to save authentication state...');
  await page.goto('https://www.saucedemo.com/');

  // Perform login
  await page.fill('#user-name', 'standard_user'); // Replace with your username selector
  await page.fill('#password', 'secret_sauce'); // Replace with your password selector
  await page.click('#login-button');

  // Wait for navigation or an element that indicates successful login-+++
  await page.waitForSelector('text=Products'); // Replace with a reliable post-login selector

  // Save the authenticated browser context state
  await page.context().storageState({ path: 'auth.json' });

  // Close the browser
  await browser.close();
}

export default globalSetup;
