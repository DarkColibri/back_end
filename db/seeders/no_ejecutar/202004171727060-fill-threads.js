'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('threads', [
      {
        description: 'Realizacion de un corto sobre un accidente con un conductor borracho.',
        subject: 'Corto accidente alcohol',
        categoryId: 1,
        userId: 1,
        replies: 0,
        visits: 0,
        views: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: 'Se contestara cualquier duda que tengan.',
        subject: 'Otras preguntas',
        categoryId: 1,
        userId: 2,
        replies: 0,
        visits: 0,
        views: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('threads', null, {})
  }
}
