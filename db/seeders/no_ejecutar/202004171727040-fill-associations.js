'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('associations', [
      {
        name: 'Energy Control',
        description: 'Reducción de riesgos en el consumo de drogas.',
        link: 'https://energycontrol.org/',
        iconLink: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Alcoholicos Anónimos',
        description: 'Asociación creada para resolver su problema de alcoholismo y ayudar a otros a recuperarse.',
        link: 'http://www.alcoholicos-anonimos.org/v_portal/apartados/apartado.asp',
        iconLink: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('associations', null, {})
  }
}
