// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const associations = sequelize.define('associations', {
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//     link: DataTypes.STRING
//   }, {})
//   associations.associate = function (models) {
//     associations.belongsToMany(models.categories, {
//       through: 'associationCategories',
//       as: 'categories',
//       foreignKey: 'associationId'
//     })
//   }
//   return associations
// }
