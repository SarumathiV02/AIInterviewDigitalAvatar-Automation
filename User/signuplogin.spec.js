const { test, expect } = require('@playwright/test');
const signup = require('./signup');
const login = require('./login');
const { isBooleanObject } = require('util/types');

test('To verify the page will redirected to the signup page when the user click the signup element in AI Interview page if already signup then redirect into the login page.', async ({ page }) => {

    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signup");

    await expect(page).toHaveTitle('Hireko.ai');

    await signUpPage.NewUserLogin('Sarumathi', 'Vasu', 'Sarumathi_Vasu', 'sarumathitvm02@gmail.com', 'V_saru2002');

    await expect(page.locator("//div[text() = 'Email already exist']")).toBeVisible();

    const isalreadyRegistered = await page.isVisible("//div[text() = 'Email already exist']");

    if (isalreadyRegistered) {

        const loginPage = new login(page);

        await page.goto("https://ai-interview-frontend.seaswap.co/login");

        await expect(page).toHaveTitle('Hireko.ai');

        await loginPage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');

    }

});