'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    boardTitle: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  Board.associate = function(models) {
    Board.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Board;
};
