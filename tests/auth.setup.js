import { test as setup, expect } from '@playwright/test';
import test from 'node:test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  await page.goto('https://ai-interview-admin.seaswap.co/login');

  await page.getByLabel('Email address').fill('sarumathitvm02@gmail.com');

  await page.getByLabel('Password').fill('V_saru2002');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForNavigation({ url: 'https://ai-interview-admin.seaswap.co/dashboard', timeout: 180000 });

//   await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});

setup.use({ storageState: 'playwright/.auth/user.json' });

setup('check for already authenicated', async({page})=>{

  await page.goto('https://ai-interview-admin.seaswap.co/dashboard');

  // await expect(page.getByText('Hello, Admin')).toBeVisible();

  await page.click('//a[@href="/post-job"]');


  await page.waitForURL('https://ai-interview-admin.seaswap.co/post-job');

})