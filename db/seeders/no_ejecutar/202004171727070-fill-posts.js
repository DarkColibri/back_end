'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        content: '¿Cómo nos repartimos las tareas?',
        threadId: 1,
        userId: 3,
        votesUp: 0,
        votesDown: 0,
        postRefId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Ana: Protagonista, María: cámara y Pepe: catering.',
        threadId: 1,
        userId: 2,
        votesUp: 0,
        votesDown: 0,
        postRefId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Pues esto sería otro comentario.',
        threadId: 1,
        userId: 3,
        votesUp: 0,
        votesDown: 0,
        postRefId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
}
