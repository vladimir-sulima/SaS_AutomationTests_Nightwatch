module.exports = {
    '@tags' : ['Smoke', 'Login'],
    'Login to Product Platform': function(browser){
        const loginPage = browser.page.login_page();
        const homePage = browser.page.home_page();
        const profilePage = browser.page.profile_page()

        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;
        const user_fullName = process.env.USER_FULLNAME;


        loginPage
            .maximizeWindow()
            .navigate()
            .login(userEmail, userPassword)
            .useXpath().waitForElementPresent(navigator_header, timeout, false, message="Wait for header displayed")

        homePage
            .navigateToProfilePage()
        
        profilePage
            .verifyUserFullName(user_fullName)
            .end()
    }
}