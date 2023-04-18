const mysql = require('mysql');
const conf = require("./dbhost/dbhost.json");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  multipleStatements: true,
});

module.exports = connection;