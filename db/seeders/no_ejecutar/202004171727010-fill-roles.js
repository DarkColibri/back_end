'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        description: 'Super Usuario. Este usuario puede realizar todo.',
        createdAt: new Date(),
        UpdatedAt: new Date()
      }, {
        name: 'Tutor',
        description: 'Este es el rol del Tutor. Tiene más pivilegios que un "Alumno".',
        createdAt: new Date(),
        UpdatedAt: new Date()
      }, {
        name: 'Usuario',
        description: 'Este es el rol de un normal',
        createdAt: new Date(),
        UpdatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {})
  }
}
