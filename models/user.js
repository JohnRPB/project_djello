'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
  });

  Board.associate = function(models) {
    User.hasMany(models.Board, {
      foreignKey: 'userId',
    });
  };

  return User;
};
