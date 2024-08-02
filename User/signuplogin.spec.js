const {test, expect}= require('@playwright/test');
const signup = require('./signup');
const login = require('./login')

test('To verify the page will redirected to the signup page when the user click the signup element in AI Interview page.', async ({ page }) => {
    // const browser = await chromium.launch({ headless: false });
    const signUpPage = new signup(page);

    await this.page.goto(getDynamicUrl('signup'));;

    await expect(page).toHaveTitle('Hireko.ai');

    const signup= new signup(page);

    await signup.signuppage();

    await signup.NewUserLogin('Sarumathi','Vasu','Sarumathi_Vasu','sarumathitvm02@gmail.com','V_saru2002');

    await signup.checkToastrMessage(); //checks if the user is already registered.

    await this.page.goto(getDynamicUrl('signup')); // Navigate to the website for login

    await expect(page).toHaveTitle('Hireko.ai');

    const login=new login(page);

    await login.loginpage();

    await login.UserLogin('sarumathitvm02@gmail.com','V_saru2002');

    await browser.close();
});