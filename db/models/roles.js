// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const roles = sequelize.define('roles', {
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {})
//   roles.associate = function (models) {
//     // associations can be defined here
//     // Un ROL puede tener VARIOS USUARIOS ()
//     roles.hasMany(models.users, {
//       foreignKey: 'roleId',
//       as: 'users'
//     })
//   }
//   return roles
// }
