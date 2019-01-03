'use strict';
module.exports = (sequelize, DataTypes) => {
  const Neighorhood = sequelize.define('Neighorhood', {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Neighorhood.associate = function(models) {
    // associations can be defined here
  };
  return Neighorhood;
};