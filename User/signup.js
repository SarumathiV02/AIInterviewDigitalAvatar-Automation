class signup{
    constructor(page){
        this.page=page
    }

    get signupElement() {
        return this.page.getByRole('link', { name: 'Sign Up' });
    }

    get FirstName(){
        return this.page.getByPlaceholder("Enter first name")
    }

    get LastName(){
        return this.page.getByPlaceholder("Enter last name")
    }

    get Username(){
        return this.page.getByPlaceholder("Enter Username")
    }

    get Emailaddress(){
        return this.page.getByPlaceholder("Enter Email address")
    }

    get Password(){
        return this.page.getByPlaceholder("Enter Password")
    }

    
    get signUpButton() {
        return this.page.getByRole('button', { name: 'Sign Up' });
    }


    async signuppage(){        //Method for Navigating to Sign Up Page

        await this.page.goto(getDynamicUrl('signup'));

        await this.signupElement.click();
    }

    async NewUserLogin(FirstName,LastName,Username,Emailaddress,Password){
        console.log(FirstName,LastName,Username,Emailaddress,Password);

        await this.FirstName.fill(FirstName);    //Waits for the 'firstname' input field to be ready, then fills it with the provided firstname.

        await this.LastName.fill(LastName);

        await this.Username.fill(Username);

        await this.Emailaddress.fill(Emailaddress);

        await this.Password.fill(Password);

        await this.page.waitForTimeout(1000);   // This can be used to ensure any dynamic content are fully loaded before proceeding.

        await this.signUpButton.click();


    }

    async checkToastrMessage(){
        try{
            const toastrmessage = await this.page.waitForSelector('.toastr', { timeout: 5000 });
            const meaasageText= await toastrmessage.innertext();
            if(messageText.includes("Email Already Registered"));{
                console.log("Email already registered, Redirecting to login page"); // // Implement redirection to login page logic here, if needed
            await this.page.goto(getDynamicUrl('signup'));   //url dyanamic
        }

        }catch(error){
        console.log('No toastr message found. Proceeding to signup page.'); //  // No toastr message, continue with the signup process
    }
}
}
function getDynamicUrl(page) {
    const baseUrl = 'https://ai-interview-frontend.seaswap.co';
    return `${baseUrl}/${page}`;
}

module.exports = signup;