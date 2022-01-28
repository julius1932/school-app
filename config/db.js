module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "skul",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    port: 3306,
    username: "2lhVduKPPz",
    password: "zAHnCD8zkD",
    database: "2lhVduKPPz",
    host: "remotemysql.com",
    dialect: "mysql",
  },
  production: {
    host: process.env.DB_HOST,
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    dialect: "mysql",
  },
  staging: {
    host: process.env.DB_HOST,
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    dialect: "mysql",
  },
};
