// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const posts = sequelize.define('posts', {
//     content: DataTypes.STRING,
//     threadId: DataTypes.INTEGER,
//     userId: DataTypes.INTEGER,
//     votesUp: DataTypes.INTEGER,
//     votesDown: DataTypes.INTEGER,
//     postRefId: DataTypes.INTEGER
//   }, {})
//   posts.associate = function (models) {
//     // El POST TIENE un USUARIO.
//     posts.belongsTo(models.users)
//     // El POST TIENE un THREAD
//     posts.belongsTo(models.threads)
//     // El POST PUEDE TENER ser POST respuesta.
//     posts.belongsTo(models.posts)
//     // El POST PUEDE TENER MUCHAS RESPUESTAS
//     posts.hasMany(models.posts, {
//       foreignKey: 'threadId',
//       as: 'posts'
//     })
//   }
//   return posts
// }
