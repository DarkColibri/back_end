// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const users = sequelize.define('users', {
//     name: DataTypes.STRING,
//     password: DataTypes.STRING,
//     age: DataTypes.STRING,
//     email: DataTypes.STRING,
//     roleId: DataTypes.INTEGER
//   }, {})

//   users.associate = function (models) {
//     // associations can be defined here
//     // El USUARIO TIENE un ROL.
//     users.belongsTo(models.roles)
//     // El USUARIO PUEDE TENER MUCHOS THREADS
//     users.hasMany(models.threads, {
//       foreignKey: 'userId',
//       as: 'threads'
//     })
//     // El USUARIO PUEDE TENER MUCHOS POSTS
//     users.hasMany(models.posts, {
//       foreignKey: 'userId',
//       as: 'posts'
//     })
//   }
//   return users
// }
