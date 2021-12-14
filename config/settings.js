var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "Avinash",
  password: "avi9724570898",
  database: "event_management"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

module.exports = {
	con: con
	
};