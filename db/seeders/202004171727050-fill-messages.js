'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('messages', [
      {
        from: 1,
        to: 2,
        text: 'Mensaje 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 1,
        to: 3,
        text: 'Mensaje 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 2,
        to: 1,
        text: 'Mensaje 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 2,
        to: 3,
        text: 'Mensaje 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 3,
        to: 1,
        text: 'Mensaje 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 3,
        to: 2,
        text: 'Mensaje 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 1,
        to: 2,
        text: 'Mensaje 7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 2,
        to: 3,
        text: 'Mensaje 8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 2,
        to: 3,
        text: 'Mensaje 9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        from: 3,
        to: 2,
        text: 'Mensaje 10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('messages', null, {})
  }
}
