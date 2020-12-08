const debug = require('debug')('src-ssr:api:chats:model')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

// eslint-disable-next-line @typescript-eslint/class-name-casing
class chats extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with chats model
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

module.exports = chats.init(
  {
    chat: {
      type: Sequelize.INTEGER,
      references: {
        model: 'chats'
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
// chats.beforeSave(chats.hashPassword)
