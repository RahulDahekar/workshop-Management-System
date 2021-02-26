var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "workshop"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE workshop(username VARCHAR(20),address VARCHAR(80),email VARCHAR(40))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});