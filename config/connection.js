var mysql = require ('mysql');

require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
		host: process.env.host,
		user: process.env.user,
		password: process.env.password,
		database: process.env.database
} else {
	connection = mysql.createConnection(
	{
		host: 'localhost',
    		port:3306,
		user: 'root',
		password: process.env.MYSQL_PASSWORD,
		database: 'burgers_db'
	});

connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
