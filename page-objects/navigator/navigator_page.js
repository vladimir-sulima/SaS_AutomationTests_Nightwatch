jurisdiction_optionFilter = "(//div[@class='q-field__inner relative-position col self-stretch column justify-center'])[1]/..";
service_optionFilter = "//div[@class='header--label' and contains(text(),'Service')]/..";
product_optionFilter = "//div[@class='header--label' and contains(text(),'Product')]/..";
activity_optionFilter = "//div[@class='header--label' and contains(text(),'Activity')]/..";
subActivity_optionFilter = "//div[@class='header--label' and contains(text(),'Sub Activity')]/..";

jurisdictionOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Jurisdiction')]";
productOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Product')]";
activityOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Activity')]";
subActivityOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Sub Activity')]";

expandedDDL = "//div[@class='q-menu q-position-engine scroll']";
clearCategory_link = "//div[@class='header--label' and contains(text(),'Category')]/../../..//span[text()='clear']";

module.exports = {
    url: '',
    commands: [{
        selectJurisdictionByName(jurisdictions){
            this.api.perform((done)=> {

                this.waitForElementPresent(jurisdiction_optionFilter, timeout, message='"Jurisdiction" ddl loaded - Navigator page.');
                this.pause(1500);         

                this.click(jurisdiction_optionFilter);

                if(currentBrowser == 'IE'){
                    this.click(jurisdiction_optionFilter);
                }

                this.waitForElementPresent(expandedDDL, timeout, message=`"Jurisdiction" menu expanded - Navigator page.`);
                
                jurisdictions.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']`)
                });
                done();
            })
            return this;
        },
        selectServiceByName(services){
            this.api.perform((done)=> {

                this.waitForElementPresent(service_optionFilter, timeout, message='"Service" ddl loaded - Navigator page.')
                this.click(service_optionFilter);
                this.waitForElementPresent(expandedDDL, timeout, message='"Service" menu expanded - Navigator page.');
                
                services.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                })

                done();

            })
            return this;
        },
        selectProductByName(products){
            this.api.perform((done)=> {

                this.waitForElementPresent(productOptionFilterLoaded, timeout, message='"Product" ddl loaded - Navigator page')
                this.click(product_optionFilter);
                this.waitForElementPresent(expandedDDL, timeout, message='"Product" menu expanded - Navigator page');
                
                products.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                })
                
                done();

            })
            return this;
        },
        selectActivityByName(activities){
            this.api.perform((done)=> {

                this.waitForElementPresent(activityOptionFilterLoaded, timeout, message='"Activity" ddl loaded - Navigator page')
                this.click(activity_optionFilter);
                this.waitForElementPresent(expandedDDL, timeout, message='"Activity" menu expanded - Navigator page');
                
                activities.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                })
                done();

            })
            return this;
        },
        selectSubActivityByName(subActivities){
            this.api.perform((done)=> {

                this.waitForElementPresent(subActivityOptionFilterLoaded, timeout, message='"Sub Activity" ddl loaded - Navigator page')
                this.click(subActivity_optionFilter);
                this.waitForElementPresent(expandedDDL, timeout, message='"Sub Activity" menu expanded - Navigator page');
                
                subActivities.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                })
                done();

            })
            return this;
        },
        clear_Category(){
            return this
            .click(clearCategory_link)
        },
        verifyJurisdiction_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(jurisdiction_optionFilter, timeout, message='Wait for "Jurisdiction" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyService_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(service_optionFilter, timeout, message='Wait for "Service" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyProduct_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(product_optionFilter, timeout, message='Wait for "Product" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyActivity_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(activity_optionFilter, timeout, message='Wait for "Activity" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifySubActivity_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(subActivity_optionFilter, timeout, message='Wait for "Sub Activity" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
    }]
}

