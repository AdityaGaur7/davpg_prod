var mysql = require('mysql');
var con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  port: 3306,
  database: "sql12725708",
  user: "sql12725708",
  password: "wPrPqW7Zc4"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
