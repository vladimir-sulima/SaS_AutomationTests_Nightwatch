module.exports = {
    url: '',
    commands: [{
        navigateToProductResultView(){
            this.api.perform((done)=> {
                this.pause(1000);
                this.waitForElementPresent("//a[@href='/products/product' and @tabindex='0']", message='Wait for Product result view available');

                this.click("//a[@href='/products/product']");
                this.waitForElementPresent("//a[@href='/products/product' and @tabindex='-1']", message='Wait for Product result view loaded');
                
                this.pause(1000);
                done();
            })
            return this;
        }
    }]
}