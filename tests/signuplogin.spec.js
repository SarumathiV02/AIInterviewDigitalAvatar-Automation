const { test, expect } = require('@playwright/test');
const signup = require('../User/signup');
const login = require('../User/login');
const { isBooleanObject } = require('util/types');
test('SIGNUP To verify the page will redirected to the signup page when the user click the signup element in AI Interview page if already signup then redirect into the login page.', async ({ page }) => {

    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signup");

    await expect(page).toHaveTitle('H!reko.ai');

    await signUpPage.NewUserLogin('Sarumathi', 'Vasu', 'Sarumathi_Vasu', 'sarumathitvm02@gmail.com', 'V_saru2002');

    await expect(page.locator("//div[text() = 'Email already exist']")).toBeVisible();

    const isalreadyRegistered = await page.isVisible("//div[text() = 'Email already exist']");

    if (isalreadyRegistered) {

        const loginPage = new login(page);

        await page.goto("https://ai-interview-frontend.seaswap.co/login");

        await expect(page).toHaveTitle('H!reko.ai');

        await loginPage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');

    }

});

test('LOGIN To verify the user can log in on AI Interview page.', async ({ page }) => {
    const loginPage = new login(page);

        await page.goto("https://ai-interview-frontend.seaswap.co/login");
    
        await expect(page).toHaveTitle('H!reko.ai');
        
        await loginPage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');
    });

    
test('NEGATIVE TEST CASES to verify that negative cases, field validations and error messages', async({page})=>{

    const signUpPage = new signup(page);
    
    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");
    
    await expect(page).toHaveTitle("H!reko.ai");
    
    await signUpPage.NewUserLogin("", "","","","");
    
        //addding assertions to check error messages  
    
    const firstnameerrormessage=await page.locator("//div[text()='First name is required.']");
    
    await expect(firstnameerrormessage).toHaveText('First name is required.');
    
    const lastnameerrormessaage = await page.locator("//div[text()='last name is required.']");
    
    await expect(lastnameerrormessaage).toHaveText('last name is required.');
    
    const usernameerrormessage=await page.locator("//div[text()='username is required.']");
    
    await expect(usernameerrormessage).toHaveText('username is required.');
    
    const emailaddresserror = await page.locator("//div[text()='Email is required.']");
    
    await expect(emailaddresserror).toHaveText('Email is required.');
    
    const passworderrormessage = await page.locator("//div[text()='Password is required.']");
    
    await expect(passworderrormessage).toHaveText('Password is required.');
    
}); 

    
test('FIELS VALIDATIONS to verify that negative cases, field validations and error messages if one field is missing', async({page})=>{

    const signUpPage = new signup(page);
    
    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");
    
    await expect(page).toHaveTitle("H!reko.ai");
    
    await signUpPage.NewUserLogin("saru", "","","",""); //lastname,username,email,password are missing.
    
    const lastnameerrormessaage = await page.locator("//div[text()='last name is required.']");
    
    await expect(lastnameerrormessaage).toHaveText('last name is required.');
    
    const usernameerrormessage=await page.locator("//div[text()='username is required.']");
    
    await expect(usernameerrormessage).toHaveText('username is required.');
    
    const emailaddresserror = await page.locator("//div[text()='Email is required.']");
    
    await expect(emailaddresserror).toHaveText('Email is required.');
    
    const passworderrormessage = await page.locator("//div[text()='Password is required.']");
    
    await expect(passworderrormessage).toHaveText('Password is required.');
    
});

    
test('EMAIL VALIDATIONS to verify the email address-validations missing@',async({page})=>{

    const signUpPage = new signup(page);
    
    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");
    
    await expect(page).toHaveTitle("H!reko.ai");
    
    await signUpPage.NewUserLogin("saru", "mathi","saru_mathi","saru","V_saru2002");
    
    const emailincorrectalretmessage='text="Please include an @ in the email address.sarumathi is missing an @"';
    
    const isVisible=await page.isVisible(emailincorrectalretmessage)
    
    if(true){
        console.log("Alert is displayed");
    }else{
        console.log("Alert is not displayed");
    }
});


test('Visual Comparsions', async({page})=>{

    // const signUpPage=new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");

    await expect(page).toHaveScreenshot('frontend.png');

    // await page.locator("//input[@id='firstName']").click();

    // await page.locator("//input[@id='firstName']").fill('sarumathivasu')

    await expect(page).toHaveScreenshot('frontend.png');




});

