jurisdiction_optionFilter = "//*[@id='pp-location-filter']/label/div";
service_optionFilter = "//div[@class='header--label' and contains(text(),'Service')]/..";
product_optionFilter = "//*[@id='pp-product-filter']";
activity_optionFilter = "//*[@id='pp-activity-filter']";
subActivity_optionFilter = "//*[@id='pp-subActivity-filter']";

jurisdictionOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Jurisdiction')]";
productOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Product')]";
activityOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Activity')]";
subActivityOptionFilterLoaded = "//label[@class='q-field row no-wrap items-start q-select q-field--auto-height q-select--without-input q-field--borderless q-field--dense product-select-empty']//div[contains(text(), 'Sub Activity')]";

expandedDDL = "//div[@class='q-menu q-position-engine scroll']";
loadSpinner = "//div[@class='product-fetching']";
clearCategory_link = "//div[@class='header--label' and contains(text(),'Category')]/../../..//span[text()='clear']";

module.exports = {
    url: '',
    commands: [{
        selectJurisdictionByName(jurisdictions){
            this.api.perform((done)=> {

                // if(currentBrowser == 'IE'){
                //     this.click(jurisdiction_optionFilter);
                // }
                jurisdictions.forEach((element) => {
                    this.waitForElementPresent(jurisdiction_optionFilter, message='"Jurisdiction" ddl loaded - Navigator page.');
                    this.pause(500);         
                    this.click(jurisdiction_optionFilter);
                    this.waitForElementPresent(expandedDDL, message=`"Jurisdiction" menu expanded - Navigator page.`);


                    this.click(`//div[@class='q-item__label' and text()='${element}']`);
                    this.waitForElementNotPresent(loadSpinner, message='Wait for load spinner not visible')
                });
                done();
            })
            return this;
        },
        selectServiceByName(services){
            this.api.perform((done)=> {

                this.waitForElementVisible(service_optionFilter, message='"Service" ddl loaded - Navigator page.')

                this.click(service_optionFilter);
                this.waitForElementPresent(expandedDDL, message='"Service" menu expanded - Navigator page.');
                
                services.forEach((element) => {
                    
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                    this.waitForElementNotPresent(loadSpinner, message='Wait for load spinner not visible')
                })

                done();

            })
            return this;
        },
        selectProductByName(products){
            this.api.perform((done)=> {

                this.waitForElementPresent(productOptionFilterLoaded, message='"Product" ddl loaded - Navigator page')
                this.click(product_optionFilter);
                this.waitForElementPresent(expandedDDL, message='"Product" menu expanded - Navigator page');
                
                products.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                    this.waitForElementNotPresent(loadSpinner, message='Wait for load spinner not visible');
                })
                
                done();

            })
            return this;
        },
        selectActivityByName(activities){
            this.api.perform((done)=> {

                this.waitForElementPresent(activityOptionFilterLoaded, message='"Activity" ddl loaded - Navigator page')
                this.click(activity_optionFilter);
                this.waitForElementPresent(expandedDDL, message='"Activity" menu expanded - Navigator page');
                
                activities.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                    this.waitForElementNotPresent(loadSpinner, message='Wait for load spinner not visible');
                })
                done();

            })
            return this;
        },
        selectSubActivityByName(subActivities){
            this.api.perform((done)=> {

                this.waitForElementPresent(subActivityOptionFilterLoaded, message='"Sub Activity" ddl loaded - Navigator page')
                this.click(subActivity_optionFilter);
                this.waitForElementPresent(expandedDDL, message='"Sub Activity" menu expanded - Navigator page');
                
                subActivities.forEach((element) => {
                    this.click(`//div[@class='q-item__label' and text()='${element}']/../..`);
                    this.waitForElementNotPresent(loadSpinner, message='Wait for load spinner not visible')
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

                this.waitForElementPresent(jurisdiction_optionFilter, message='"Jurisdiction" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyService_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(service_optionFilter, message='"Service" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyProduct_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(product_optionFilter, message='"Product" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifyActivity_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(activity_optionFilter, message='"Activity" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
        verifySubActivity_FilteOptionExist(){
            this.api.perform((done)=> {

                this.waitForElementPresent(subActivity_optionFilter, message='"Sub Activity" filter option visible - Navigator page');
                done();
            })
            
            return this;
        },
    }]
}

