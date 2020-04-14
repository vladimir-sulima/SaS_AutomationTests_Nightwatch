const dotenv = require('dotenv');
dotenv.config();
environment_url = process.env.ENVIRONMENT_URL;
// timeout = process.env.WAIT_ELEMENT_TIMEOUT;
browserstack_username=process.env.BROWSERSTACK_USERNAME;
browserstack_access_key=process.env.BROWSERSTACK_ACCESS_KEY;


nightwatch_config = {
    "src_folders" : ["tests"],
    "page_objects_path" : ['page-objects', 'page-objects/navigator'],
    "globals_path": "globalsModule.js",
     selenium : {
       "start_process" : false,
       "host" : "hub-cloud.browserstack.com",
       "port" : 443
     },
   
     test_settings: {
       default: {
         desiredCapabilities: {
           'browserstack.user': browserstack_username,
           'browserstack.key': browserstack_access_key,
           'browser': 'chrome',
         }
      },
      chrome:{
        desiredCapabilities: {
        'browserstack.user': browserstack_username,
        'browserstack.key': browserstack_access_key,
        "os" : "Windows",
        "os_version" : "10",
        "browser" : "Chrome",
        "browser_version" : "80.0",
        "browserstack.local" : "false",
        "browserstack.selenium_version" : "3.5.2",
     }
   },
      firefox:{
        desiredCapabilities: {
        'browserstack.user': browserstack_username,
        'browserstack.key': browserstack_access_key,
        "os" : "Windows",
        "os_version" : "10",
        "browser" : "Firefox",
        "browser_version" : "74.0",
        "browserstack.local" : "false",
        "browserstack.selenium_version" : "3.10.0",
     }
   },
      safari:{
        desiredCapabilities: {
        'browserstack.user': browserstack_username,
        'browserstack.key': browserstack_access_key,
        "os" : "OS X",
        "os_version" : "El Capitan",
        "browser" : "Safari",
        "browser_version" : "9.1",
        "browserstack.local" : "false",
        "browserstack.selenium_version" : "3.5.2",
     }
   },
        ie:{
            desiredCapabilities: {
            'browserstack.user': browserstack_username,
            'browserstack.key': browserstack_access_key,
            "os" : "Windows",
            "os_version" : "10",
            "browser" : "IE",
            "browser_version" : "11.0",
            "browserstack.local" : "false",
            "browserstack.selenium_version" : "3.5.2",
         }
       },
       edge:{
        desiredCapabilities: {
        'browserstack.user': browserstack_username,
        'browserstack.key': browserstack_access_key,
        "os" : "Windows",
        "os_version" : "10",
        "browser" : "Edge",
        "browser_version" : "80.0",
        "browserstack.local" : "false",
        "browserstack.selenium_version" : "3.5.2",
     }
   },

     }
   };
   
   // Code to copy seleniumhost/port into test settings
   for(var i in nightwatch_config.test_settings){
     var config = nightwatch_config.test_settings[i];
     config['selenium_host'] = nightwatch_config.selenium.host;
     config['selenium_port'] = nightwatch_config.selenium.port;
   }
   
   module.exports = nightwatch_config;