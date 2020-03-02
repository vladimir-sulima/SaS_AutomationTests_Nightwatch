TIMEOUT_VALUE = 7000;

login_button = "//button[@data-trigger='login']";
email_inputField = "//input[@name='email']";
password_inputField = "//input[@name='password']";
login_submitButton = "//button[@name='submit']";
greatingMessage = "//span[text()='Welcome back']";
fullName = "//span[text()='Welcome back']/following-sibling::h1";

module.exports = {
    url: 'https://web.test-simmons.com/',
    commands: [{
        login(username, password){
            return this
            .waitForElementVisible(login_button, TIMEOUT_VALUE, message="Wait for login button visible - Main page")
            .click(login_button)
            .waitForElementVisible(email_inputField, TIMEOUT_VALUE, message="Wait for Email input field visible - Login page")
            .waitForElementVisible(password_inputField, TIMEOUT_VALUE, message="Wait for Password input field visible - Login page")
            .setValue(email_inputField, username)
            .setValue(password_inputField, password)
            .click(login_submitButton)
        },
        verify_userLoggedInSuccessfully(expected_fullName){


            this.api.perform((done)=> {

                this.waitForElementVisible(greatingMessage, message='Wait for welcome message - Main page')
                this.expect.element(fullName).text.to.equal(expected_fullName)
                
                done();
            })

            return this;

        }
    }]
}
