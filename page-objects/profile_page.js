userFullName = "//h5";

module.exports = {
    url: '',
    commands: [{
        verifyUserFullName(expectedFullName){
            this.api.perform((done)=> {
                this.waitForElementVisible(userFullName, timeout, message='User Full Name visible - Profile page.');
                this.assert.containsText(userFullName, expectedFullName, message='Verify user full name - Profile page');

                done();
            })
            return this;
            
            
        },
    }]
}