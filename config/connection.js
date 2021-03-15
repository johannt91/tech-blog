const Sequelize = require('sequelize');

require('dotenv').config();

//===== CONNECT TO THE DB =====//
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;