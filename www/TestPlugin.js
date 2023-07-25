var exec = require("cordova/exec");

module.exports.coolMethod = function (arg0, success, error) {
  exec(success, error, "TestPlugin", "coolMethod", [arg0]);
};

var TestPlugin = function () {}; // This just makes it easier for us to export all of the functions at once.
// All of your plugin functions go below this.
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.

TestPlugin.addTwoNumber = function (arg0, onSuccess, onError) {
  exec(onSuccess, onError, "TestPlugin", "addTwoNumber", arg0);
};
module.exports = TestPlugin;
