var mysql = require ('mysql');

var connection;

	connection = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: '4Shizle#11',
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