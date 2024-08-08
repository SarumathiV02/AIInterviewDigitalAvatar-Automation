const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const expectedHtmlContent = fs.readFileSync(path.join(__dirname, './pageHtmlContent.txt'), 'utf8');

test('verify privacy policy page HTML content', async ({ page }) => {

  await page.goto('https://dev.notifynow.uk/privacy-policy');


  const pageHtmlContent = await page.content();

  // fs.writeFileSync(path.join(__dirname, 'pageHtmlContent.txt'), pageHtmlContent, 'utf8');

 expect(pageHtmlContent).toBe(expectedHtmlContent);
});