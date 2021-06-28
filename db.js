const { Pool } = require('pg');
const keys = require('./config/keys');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(keys.pgConString);

try {
  sequelize.authenticate();
  console.log('Database connection established');
} catch (err) {
  console.log(err);
}
module.exports = sequelize;
