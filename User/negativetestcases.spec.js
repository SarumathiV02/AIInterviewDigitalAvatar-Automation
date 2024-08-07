// const { expect } = require("@playwright/test")
// const { default: test } = require("node:test")

const{test,expect}=require('@playwright/test');
const signup=require('./signup');
const login=require('./login');

test('to verify that negative cases, field validations and error messages', async({page})=>{

    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");

    await expect(page).toHaveTitle("Hireko.ai");

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

test('to verify that negative cases, field validations and error messages if one field is missing', async({page})=>{

    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");

    await expect(page).toHaveTitle("Hireko.ai");

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


test('to verify the email address-validations missing@',async({page})=>{

    const signUpPage = new signup(page);

    await page.goto("https://ai-interview-frontend.seaswap.co/signUp");

    await expect(page).toHaveTitle("Hireko.ai");

    await signUpPage.NewUserLogin("saru", "mathi","saru_mathi","saru","V_saru2002");

    const emailincorrecterrormsg=await page.locator("XPATH TO ADDED"); //css=.mb-3:nth-child(5) > .form-label 

    // const emailincorrecterror=await page.locator('text=Please enter a part following \'@\'. \'@missingdomain.com\' is incomplete.');

    await expect(emailincorrecterrormsg).toHaveText('Please include an @ in the email address.sarumathi is missing an @');

});