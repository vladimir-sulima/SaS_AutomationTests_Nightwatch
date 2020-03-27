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
        verifyDetailedViewExist_ProductResultView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(detailedView_button, timeout, message='"Detaiuled view" menu option displayed - Product result view.');
                done();

            })
            return this;
        },
        verifyQuickViewExist_ProductResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(quickView_button, timeout, message='"Quick view" menu option displayed - Product result view.');
                done();

            })
            return this;
        },
        verifyExemptionsCategorySectionExist_ProductResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(exemption_categorySection, timeout, message='"Exemps" category exist - Product result view.');
                done();

            })
            return this;
        },
        verifyRestrictionsCategorySectionExist_ProductResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(restrictions_categorySection, timeout, message='"Restrictions" category exist - Product result view.');
                done();
            })
            return this;
        },
        verifySanctionsCategorySectionExist_ProductResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(sanctions_categorySection, timeout, message='"Sanctions" category exist - Product result view.');
                done();
            })
            return this;
        },
        verifyUnsolicitedApproachCategorySectionExist_ProductResutView(){
            this.api.perform((done)=> {

                this.waitForElementPresent(unsolicitedApproach_categorySection, timeout, message='"Unsolicited approach" category exist - Product result view.');
                done();
            })
            return this;
        },
    }]
}