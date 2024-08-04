const {test, expect}= require('@playwright/test');
const signup = require('./signup');
const login = require('./login')

test('To verify the page will redirected to the signup page when the user click the signup element in AI Interview page.', async ({ page }) => {
    
    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signup");

    await expect(page).toHaveTitle('Hireko.ai');

    await signUpPage.NewUserLogin('Sarumathi','Vasu','Sarumathi_Vasu','sarumathitvm02@gmail.com','V_saru2002');

    await signUpPage.checkToastrMessage("Email Already Registered", "full url"); //checks if the user is already registered.

test('To verify the user can log in on AI Interview page.', async ({ page }) => {

    const loginPage = new Login(page);
    
    await page.goto("https://ai-interview-frontend.seaswap.co/login");
    
    await expect(page).toHaveTitle('Hireko.ai');
    
    await loginPage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');
});

await browser.close();
});