profile_page_menu_button = "//a[@href='/profile']//div";
navigator_page_menu_button = "(//aside//a[@href='/products']//..)[1]";

module.exports = {
    url: '',
    commands: [{
        navigateToProfilePage(){
            return this
            .useXpath()
            .waitForElementPresent(profile_page_menu_button, timeout, message='"My Profile" menu button displayed.')
            .click(profile_page_menu_button)
        },
        navigateToNavigatorPage(){
            return this
            .useXpath()
            .waitForElementPresent(navigator_page_menu_button, timeout, message='"navigator" menu button displayed.')
            .click(navigator_page_menu_button)
        },
    }]
}