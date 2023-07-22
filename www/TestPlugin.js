var exec = require("cordova/exec");

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, "TestPlugin", "coolMethod", [arg0]);
};

exports.addTwoNumber = function (arg0, onSuccess, onError) {
  exec(onSuccess, onError, "TestPlugin", "addTwoNumber", [arg0]);
}
