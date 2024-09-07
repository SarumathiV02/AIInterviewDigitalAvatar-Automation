// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://ai-interview-admin.seaswap.co/login');

  await page.fill('input[name="email"]', 'sarumathitvm02@gmail.com');

  await page.fill('input[name="password"]', 'V_saru2002');

  await page.click('button[type="submit"]');

  await page.waitForURL('https://ai-interview-admin.seaswap.co/dashboard');

  // Save the authenticated state to a file
  await context.storageState({ path: 'playwright/.auth/user.json' });

  await browser.close();
};
