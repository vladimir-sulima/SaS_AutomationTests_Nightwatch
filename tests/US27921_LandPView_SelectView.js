module.exports = {
    '@tags' : ['Regression', 'US27921'],
    'US27921 L&P - Detailed and Quick views exist': function(browser){
        currentBrowser = browser.options.desiredCapabilities.browser;
        const loginPage = browser.page.login_page();
        const homePage = browser.page.home_page();
        const navigatorPage = browser.page.navigator_page();
        const resultViewPage = browser.page.resultView_page();
        const licensingResultPage = browser.page.licensing_resultView_page();
        const productResultPage = browser.page.product_resultView_page();

        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;        

        loginPage
            .maximizeWindow()
            .navigate()
            .login(userEmail, userPassword)

        homePage
            .navigateToNavigatorPage()

        navigatorPage
            .selectJurisdictionByName(["Germany", "Hong Kong"])
            .selectServiceByName(["Lending", "Securities"])
            .selectProductByName(["Commodity derivatives", "Arranging Primary Loans"])
            .selectActivityByName(["All"])
            .selectSubActivityByName(["All"])

        licensingResultPage
            .verifyDetailedViewExist_LicensingResultView()
            .verifyQuickViewExist_LicensingResutView()
        
        resultViewPage
            .navigateToProductResultView()
        
        productResultPage
            .verifyDetailedViewExist_ProductResultView()
            .verifyQuickViewExist_ProductResutView()

            .end()

    }
}