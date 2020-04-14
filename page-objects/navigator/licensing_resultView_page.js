detailedView_button = "//div[text()='Detail view']";
quickView_button = "//div[text()='Quick view']";

resultCategories = "//div[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable pp-detail-category--header']";
exemption_categorySection = "//div[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable pp-detail-category--header']//p[text()='Exemptions']";
restrictions_categorySection = "//div[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable pp-detail-category--header']//p[text()='Restrictions']";
sanctions_categorySection = "//div[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable pp-detail-category--header']//p[text()='Sanctions']";
unsolicitedApproach_categorySection = "//div[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable pp-detail-category--header']//p[text()='Unsolicited approach']";

module.exports = {
    url: '',
    commands: [{
        verifyDetailedViewExist_LicensingResultView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(detailedView_button, message='"Detaiuled view" menu option displayed - Licensing result view.');
                done();

            })
            return this;
        },
        verifyQuickViewExist_LicensingResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(quickView_button, message='"Quick view" menu option displayed - Licensing result view.');
                done();

            })
            return this;
        },
        verifyExemptionsCategorySectionExist_LicensingResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(exemption_categorySection, message='"Exemps" category exist - Licensing result view.');
                done();

            })
            return this;
        },
        verifyRestrictionsCategorySectionExist_LicensingResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(restrictions_categorySection, message='"Restrictions" category exist - Licensing result view.');
                done();
            })
            return this;
        },
        verifySanctionsCategorySectionExist_LicensingResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(sanctions_categorySection, message='"Sanctions" category exist - Licensing result view.');
                done();
            })
            return this;
        },
        verifyUnsolicitedApproachCategorySectionExist_LicensingResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(unsolicitedApproach_categorySection, message='"Unsolicited approach" category exist - Licensing result view.');
                done();
            })
            return this;
        },
    }]
}