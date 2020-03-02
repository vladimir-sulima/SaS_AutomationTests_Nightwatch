module.exports = {

    '@tags' : ['Smoke', 'Login'],
    'Login to Online Platform': function(browser){
        const expected_fullName = 'Robert McMasters'
        const mainPage = browser.page.main_page();

        mainPage
            .maximizeWindow()
            .useXpath()
            .navigate()
            .login('robmcmasters.xbtech@gmail.com', '4nddE&8^L(QNja')
            .verify_userLoggedInSuccessfully(expected_fullName)
    }
}