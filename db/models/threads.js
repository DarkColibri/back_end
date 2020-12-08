// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const threads = sequelize.define('threads', {
//     description: DataTypes.STRING,
//     subject: DataTypes.STRING,
//     categoryId: DataTypes.INTEGER,
//     userId: DataTypes.INTEGER,
//     replies: DataTypes.INTEGER,
//     visits: DataTypes.INTEGER,
//     views: DataTypes.INTEGER
//   }, {})

//   threads.associate = function (models) {
//     // Tiene una categoría
//     threads.belongsTo(models.categories)
//     // Tiene un usuario
//     threads.belongsTo(models.users)
//     // Tiene varios Comentarios
//     threads.hasMany(models.posts, {
//       foreignKey: 'threadId',
//       as: 'posts'
//     })
//   }
//   return threads
// }
