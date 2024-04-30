// Include Sequelize module
const Sequelize = require('sequelize')

// Creating new Object of Sequelize
const dbconnection  = new Sequelize(
	'nuretin',
	'root',
	'123', {

		// Explicitly specifying
		// mysql database
		dialect: 'mysql',

		// By default host is 'localhost'
		host: 'localhost',
		operatorsAliases: false,

	}
);
dbconnection
	.authenticate().then(() => {
	console.log('Connection has been established successfully.');
  }).catch((error) => {
	console.error('Unable to connect to the database: ', error);
  });

// Exporting the sequelize object.
// We can use it in another file
// for creating models
module.exports = dbconnection;
