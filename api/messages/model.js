const debug = require('debug')('src-ssr:api:messages:model')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

// eslint-disable-next-line @typescript-eslint/class-name-casing
class messages extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with messages model
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

module.exports = messages.init(
  {
    from: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    to: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
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
// messages.beforeSave(messages.hashPassword)
