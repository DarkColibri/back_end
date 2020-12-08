const debug = require('debug')('src:api:threads:model')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

// eslint-disable-next-line @typescript-eslint/class-name-casing
class threads extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with threads
   s model
   */
  static trackModel (model) {
    const {
      options:
      {
        timestamps,
        createdAt = true,
        updatedAt = true,
        paranoid
      }
    } = model

    if (timestamps) {
      [
        ...(createdAt ? ['creator'] : []),
        ...(updatedAt ? ['updater'] : []),
        ...(paranoid ? ['deleter'] : [])
      ].forEach(as => model.belongsTo(this, { as }))
    }
  }

  static associate () {
    debug('Asociamos modelo')
    this.trackModel(this)
  }

  get content () {
    debug(this.content)
    return this.content
  }
}

module.exports = threads.init(
  {
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    categoryId: {
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        model: 'categories'
      }
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      references: {
        model: 'users'
      }
    },
    replies: DataTypes.INTEGER,
    visits: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  },
  {
    sequelize,
    paranoid: true
    // defaultScope: {
    //   attributes: { exclude: ['password'] }
    // }
  }
)

// eslint-disable-next-line @typescript-eslint/unbound-method
// threads.beforeSave(threads.hashPassword)
