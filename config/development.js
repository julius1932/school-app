const devDB  = require("./db");

module.exports = {
  baseHost: 'http://localhost:5006',
  api: {
    host: '0.0.0.0',
    port: 5006
  },
  db: devDB.development,
  debug: true,
}