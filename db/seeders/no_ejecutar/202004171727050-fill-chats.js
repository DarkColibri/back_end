'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chats', [
      {
        user1: 1,
        user2: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user1: 2,
        user2: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 1,
        to: 3,
        text: 'Vaya fiesssshta anoche, no?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chats', null, {})
  }
}
