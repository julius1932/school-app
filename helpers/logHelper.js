const config = require('config');

exports.info = (msg, ...args) => {
  console.info(msg, ...args);
};

exports.log = (msg, ...args) => {
  console.log(msg, ...args);
};

exports.error = (err) => {
  if(config.get('debug')) //If debug mode is true then error will be shown in console log
    console.error(err.stack || err);
};