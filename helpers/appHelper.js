const {db} = require('../db');
const { info } = require('./logHelper');


exports.checkDbConnection = () => new Promise((resolve, reject) => {
  db.authenticate()
    .then(() => {
      const response = '\n===> Connection with db has been established successfully.';
      info(response);
      resolve(response);
    })
    .catch(reject);
});
