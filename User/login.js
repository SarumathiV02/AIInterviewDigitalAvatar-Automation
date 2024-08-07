class login{
    constructor(page){
        this.page=page
    }
    get LoginElement() {
        return this.page.getByRole('link', { name: 'Login' });
    }

    get Emailaddress(){
        return this.page.getByPlaceholder("Enter email address")
    }

    get Password(){
        return this.page.getByPlaceholder("Enter password")
    }

    get LoginButton() {
        // return this.page.getByRole('button', { name: 'Login' });
        return this.page.locator('button[type="submit"]:has-text("Login")');
    }


    async loginpage(){        //Method for Navigating to login  Page

        await this.page.goto(getDynamicUrl('login'));

        await this.LoginElement.click();
    }

    async UserLogin(Emailaddress,Password){
        
        console.log(Emailaddress,Password);

        await this.Emailaddress.fill(Emailaddress);    //Waits for the 'emailaddress' input field to be ready, then fills it with the provided emailaddress.

        await this.Password.fill(Password);

        await this.page.waitForTimeout(1000);   // This can be used to ensure any dynamic content are fully loaded before proceeding.

        await this.LoginButton.click();
}
}
function getDynamicUrl(page) {
    const baseUrl = 'https://ai-interview-frontend.seaswap.co';
    return `${baseUrl}/${page}`;
}
module.exports = login;