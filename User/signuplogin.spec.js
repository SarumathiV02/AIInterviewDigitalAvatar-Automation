const {test, expect}= require('@playwright/test');
const signup = require('./signup');
const login = require('./login')

// test('To verify the page will redirected to the signup page when the user click the signup element in AI Interview page.', async ({ page }) => {
    
//     const signUpPage = new signup(page);

//     await page.goto("https://ai-interview-frontend.seaswap.co/signup");

//     await expect(page).toHaveTitle('Hireko.ai');

//     await signUpPage.NewUserLogin('Sarumathi','Vasu','Sarumathi_Vasu','sarumathitvm02@gmail.com','V_saru2002');

//     await signUpPage.checkToastrMessage("Email already exist"); //checks if the user is already registered.

test('To verify the user can log in on AI Interview page.', async ({ page }) => {

    // const isalreadyRegistered = await signUpPage.checkToastrMessage("Email already exist");

    // if(isalreadyRegistered){

        // const loginpage = new login(page);

        await page.goto("https://ai-interview-frontend.seaswap.co/login");
    
        await expect(page).toHaveTitle('Hireko.ai');
        
        await loginpage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');

    // }
    

});

// await browser.close();
// });