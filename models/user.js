const Sequelize = require('sequelize');

const sequelize = require('../db');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4(),
    primaryKey: true,
    allowNull: false,
  },
  google_id: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  username: { type: Sequelize.STRING, allowNull: false },
});

module.exports = User;
