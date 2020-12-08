// const debug = require('debug')('cron:model')
// const moment = require('moment')

// module.exports = (sequelize, DataTypes) => {
//   debug(moment().format('MMMM Do YYYY, h:mm:ss a'));
//   const Cron = sequelize.define('cronService_cron', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     source: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     task: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     executing: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//       allowNull: false
//     },
//     times: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//       allowNull: false
//     },
//     lastExecutionStartsAt: {
//       type: DataTypes.DATE
//     },
//     lastExecutionEndsAt: {
//       type: DataTypes.DATE
//     },
//     timeout: {
//       type: DataTypes.INTEGER,
//       defaultValue: 3600, // seconds - 1h
//       allowNull: false
//     }
//   }, {
//     freezeTableName: true,
//   });

//   // relations
//   // Cron.associate = (models) => {
//   //   Cron.belongsTo(models.author);
//   // };

//   return Cron;
// }