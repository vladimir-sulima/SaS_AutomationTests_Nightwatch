
module.exports = {
    '@tags' : ['Smoke', 'Navigator', 'US27924'],
    'US27924 L&P Quick View': function(browser){
        currentBrowser = browser.options.desiredCapabilities.browser;
        const loginPage = browser.page.login_page();
        const homePage = browser.page.home_page();
        const navigatorPage = browser.page.navigator_page();
        const resultViewPage = browser.page.resultView_page();
        const licensingResultPage = browser.page.licensing_resultView_page();
        const productResultPage = browser.page.product_resultView_page();

        const userEmail = process.env.USER_EMAIL;
        const userPassword = process.env.USER_PASSWORD;     
        
        var jurisdictions = ['Germany', 'Hong Kong'];
        var services = ['Funds'];
        var products = ['Factoring']
        var activities = ['Criminal'];
        var subactivities = ['Client type'];

   

        loginPage
            .maximizeWindow()
            .navigate()
            .login(userEmail, userPassword)

        homePage
            .navigateToNavigatorPage()

        navigatorPage
            .selectJurisdictionByName(jurisdictions)
            .selectServiceByName(services)
            .selectProductByName(products)
            .selectActivityByName(activities)
            .selectSubActivityByName(subactivities)
            .clear_Category()

        licensingResultPage
            .verifyExemptionsCategorySectionExist_LicensingResutView()
            .verifyRestrictionsCategorySectionExist_LicensingResutView()
            .verifySanctionsCategorySectionExist_LicensingResutView()
            .verifyUnsolicitedApproachCategorySectionExist_LicensingResutView()
        
        resultViewPage
            .navigateToProductResultView()
        
        productResultPage
            .verifyExemptionsCategorySectionExist_ProductResutView()
            .verifyRestrictionsCategorySectionExist_ProductResutView()
            .verifySanctionsCategorySectionExist_ProductResutView()
            .verifyUnsolicitedApproachCategorySectionExist_ProductResutView()


            .end()

    }
}