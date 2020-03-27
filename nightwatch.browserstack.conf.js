const dotenv = require('dotenv');
dotenv.config();
environment_url = process.env.ENVIRONMENT_URL;
timeout = process.env.WAIT_ELEMENT_TIMEOUT;
browserstack_user=process.env.BROWSERSTACK_USER;
browserstack_key=process.env.BROWSERSTACK_KEY;


nightwatch_config = {
    "src_folders" : ["tests"],
    "page_objects_path" : ['page-objects', 'page-objects/navigator'],
     selenium : {
       "start_process" : false,
       "host" : "hub-cloud.browserstack.com",
       "port" : 443
     },
   
     test_settings: {
       default: {
         desiredCapabilities: {
           'browserstack.user': browserstack_user,
           'browserstack.key': browserstack_key,
           'browser': 'chrome',
         }
      },
      firefox:{
        desiredCapabilities: {
        'browserstack.user': browserstack_user,
        'browserstack.key': browserstack_key,
        "os" : "Windows",
        "os_version" : "10",
        "browser" : "Firefox",
        "browser_version" : "75.0 beta",
        "browserstack.local" : "false",
        "browserstack.selenium_version" : "3.5.2",
     }
   },
      safari:{
        desiredCapabilities: {
        'browserstack.user': browserstack_user,
        'browserstack.key': browserstack_key,
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
            'browserstack.user': browserstack_user,
            'browserstack.key': browserstack_key,
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
        'browserstack.user': browserstack_user,
        'browserstack.key': browserstack_key,
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