const prodDB  = require("./db");

module.exports = {
  baseHost: 'http://localhost:3006',
  api: {
    host: '0.0.0.0',
    port: 5006,
  },
  db: prodDB.production,
  debug: true,
  
};