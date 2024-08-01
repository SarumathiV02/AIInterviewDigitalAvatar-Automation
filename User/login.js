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
        return this.page.getByRole('button', { name: 'Login' });
    }


    async loginpage(){        //Method for Navigating to Sign Up Page

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
module.exports(login)