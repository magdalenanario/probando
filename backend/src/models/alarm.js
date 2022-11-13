'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alarm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  alarm.init({
    type: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    location: DataTypes.TEXT,
    message: DataTypes.TEXT,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'alarm',
  });
  return alarm;
};