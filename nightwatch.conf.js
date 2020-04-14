const dotenv = require('dotenv');
dotenv.config();
environment_url = process.env.ENVIRONMENT_URL;

module.exports = {
    "src_folders" : ["tests"],
    "page_objects_path" : ['page-objects', 'page-objects/navigator'],
    "globals_path": "globalsModule.js",
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules\\chromedriver\\lib\\chromedriver\\chromedriver.exe",
      "port": 9515
    },
    "test_settings" : {
      "default" : {
        // "launch_url":"https://nightwatchjs.org/",
        "desiredCapabilities": {
          'browserName': 'chrome'
        }
      }
    }
}