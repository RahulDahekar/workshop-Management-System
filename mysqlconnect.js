
var mysql=require("mysql");


var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"workshop"
});

connection.connect(function(err){
      if(err)
      throw err;
      console.log("your Database is connected successfully");
});
 module.exports=connection;