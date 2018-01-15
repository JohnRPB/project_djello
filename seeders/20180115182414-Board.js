'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const USER_NUMBER = 18;

    let boardTitles = [
      'Personal',
      'Daily To-Do',
      'Workshops',
      'Networking',
      'Academics',
      'Business',
    ];
    const BOARD_NUMBER = boardTitles.length;

    let newBoardTitles = boardTitles.slice(0); 
    for (var i = 0, len = USER_NUMBER-1; i < len; i++) {
      boardTitles = boardTitles.concat(newBoardTitles);
    }

    let boards = [];
    for (var i = 0, len = BOARD_NUMBER; i < len; i++) {
      boards.push({
        boardTitle: boardTitles[i], 
        description: faker.random.words(),
        userId: parseInt(i/BOARD_NUMBER) +1
      })
    }

    return queryInterface.bulkInsert("Boards", boards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
