email_inputField = "//input[@name='email']";
password_inputField = "//input[@name='password']";
login_submitButton = "//button[@name='submit']";
navigator_header = "(//div[text()='navigator'])[1]";
profile_page_menu_button = "//a[@href='/profile']";
authenticate_spinner = "//span[contains(text(), 'Authenticating')]"


module.exports = {
    url: environment_url,
    commands: [{
        login(username, password){
            return this
            .waitForElementPresent('button', timeout, message="Login button present - Authenticate page.")
            .click('button')
            .useXpath()
            .waitForElementVisible(email_inputField, timeout, message="Email input field present - Login page.")
            .waitForElementVisible(password_inputField, timeout, message="Password input field present - Login page.")
            .setValue(email_inputField, username)
            .setValue(password_inputField, password)
            .click(login_submitButton)
            .waitForElementPresent("//div[@class='q-toolbar row no-wrap items-center']//div[text()='navigator']", timeout, abortOnFailure=true, message='"navigator" header displayed - Main page.')
            
        },
    }]
}
