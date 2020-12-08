const debug = require('debug')('src:lib:helpers')
const bcrypt = require('bcryptjs')

const helpers = {}

helpers.encryptPassword = async (password) => {
  debug('Encrypt password.')
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

helpers.matchPassword = async (password, savedPassword) => {
  try {
    debug('Check passwords: ', password, savedPassword)
    return await bcrypt.compare(password, savedPassword)
  } catch (e) {
    console.error(e)
  }
}

module.exports = helpers
