const dotenv = require('dotenv');
dotenv.config();
environment_url = process.env.ENVIRONMENT_URL;
timeout = process.env.WAIT_ELEMENT_TIMEOUT;

module.exports = {
    "src_folders" : ["tests"],
    "page_objects_path" : ['page-objects', 'page-objects/navigator'],
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules\\chromedriver\\lib\\chromedriver\\chromedriver.exe",
      "port": 9515
    },
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          'browserName': 'chrome'
        }
      }
    }
}