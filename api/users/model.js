const debug = require('debug')('src:api:users:model')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

// eslint-disable-next-line @typescript-eslint/class-name-casing
class users extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with User model
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

  // static associate () {
  //   debug('Asociamos modelo')
  //   this.trackModel(this)
  // }

  // static async getHash (password) {
  //   debug(`Generamos la HASH para el password: ${password}`)
  //   const salt = await bcrypt.genSalt(10)
  //   debug(`Creamos la HASH con la SALT ${salt}`)
  //   const hash = await bcrypt.hash(password, salt)
  //   debug(`HASH ${hash}`)

  //   return hash
  // }

  static hashPassword (User) {
    debug('ANTES DE GUARDAR')
    console.log('weeeeeeeeeeeee')
  //   debug('hashPassword()')
  //   debug(User)
  //   if (User.changed('password')) {
  //     debug('Asignamos el password al usuario.')
  //     User.set('password', await this.getHash(User.password))
  //   }
  }

  get name () {
    debug(`${this.name}`)
    console.log('GET NAME! ')
    return `${this.name}`
  }
}

module.exports = users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    roleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    },
    online: Sequelize.BOOLEAN
  },
  {
    sequelize,
    paranoid: true
    // ,
    // defaultScope: {
    //   attributes: { exclude: ['password'] }
    // }
  }
)

// eslint-disable-next-line @typescript-eslint/unbound-method
users.beforeSave(users.hashPassword)
