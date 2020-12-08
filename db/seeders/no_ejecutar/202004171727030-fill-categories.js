'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Alcohol',
        description: 'Reduccion de daños del alcochol',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Cocaina',
        description: 'Reduccion de daños sobre la cocaina.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'LSD',
        description: 'Reduccion de daños del LSD. Controlate.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
