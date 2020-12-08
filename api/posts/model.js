const debug = require('debug')('src:api:posts:model')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

// eslint-disable-next-line @typescript-eslint/class-name-casing
class posts extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with posts model
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

module.exports = posts.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    threadId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'threads'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    votesUp: DataTypes.INTEGER,
    votesDown: DataTypes.INTEGER,
    postRefId: DataTypes.INTEGER
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
// posts.beforeSave(posts.hashPassword)
