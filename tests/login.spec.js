const {test, expect}= require('@playwright/test');
const signup = require('./signup');
const login = require('./login')
test('To verify the user can log in on AI Interview page.', async ({ page }) => {
    const loginPage = new login(page);

        await page.goto("https://ai-interview-frontend.seaswap.co/login");
    
        await expect(page).toHaveTitle('Hireko.ai');
        
        await loginPage.UserLogin('sarumathitvm02@gmail.com', 'V_saru2002');
    });
