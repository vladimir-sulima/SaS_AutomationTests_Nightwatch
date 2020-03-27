module.exports = {
    '@tags' : ['Smoke', 'Navigator', 'US27860'],
    'US27860 ProductDesign - ResultFilters': function(browser){
        currentBrowser = browser.options.desiredCapabilities.browser;
        const loginPage = browser.page.login_page();
        const homePage = browser.page.home_page();
        const navigatorPage = browser.page.navigator_page();

        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;        

        loginPage
            .maximizeWindow()
            .navigate()
            .login(userEmail, userPassword)

        homePage
            .navigateToNavigatorPage()

        navigatorPage
            .verifyJurisdiction_FilteOptionExist()
            .verifyService_FilteOptionExist()
            .verifyProduct_FilteOptionExist()
            .verifyActivity_FilteOptionExist()
            .verifySubActivity_FilteOptionExist()
            .end()
    }
}