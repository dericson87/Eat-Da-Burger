var mysql = require ('mysql');

var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
		host: 'b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    		port:3306,
		user: 'y0m9nzambzslqrwv',
		password: 'zxk48w9qeyq7wcvj',
		database: 'bk3i5p5d04axeh3w'

} else {
	connection = mysql.createConnection(
	{
		host: 'localhost',
    		port:3306,
		user: 'root',
		password: '',
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
