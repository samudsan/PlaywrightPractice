import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup.ts',
  testDir: './src/tests',
  timeout: 30000,
  retries: 0,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: 'auth.json',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'on',
  },
});
