const Sequelize = require('sequelize');

const sequelize = require('../db');

const CartItem = sequelize.define('cart_item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
