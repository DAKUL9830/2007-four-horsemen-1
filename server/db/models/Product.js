const Sequelize = require('sequelize');
const { STRING, TEXT, DOUBLE } = Sequelize;
const db = require('../conn');

const Product = db.define('product', {
  carName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  models:{
    type:   Sequelize.ENUM,
  },///finish this part/////
  description: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  price: {
    type: DOUBLE,
    allowNull: false,
    validate: {
      isNumeric: true,
      notEmpty: true,
      min: 0,
      max: 1000000000,
    },
  },

  image: {
    type: STRING,
    defaultValue: '',
  },
});

module.exports = Product;
