const debug = require('debug')('src:lib:passport')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const model = require('../api/users/model')
const helpers = require('./helpers')

passport.use('local.signin',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      debug('[LocalStrategy] SignIn', username, password)
      // const rows = await repository.getUser(username)
      const rows = await model.findAll({
        where: { name: username }
      })
      // debug('Existe usuario..... [OK]')
      if (rows.length > 0) {
        const user = rows[0].dataValues
        // debug(user)
        const validPassword = await helpers.matchPassword(password, user.password)
        if (validPassword) {
          debug('Passwords OK - SuccessRedirect >>>>>')
          // done(null, user, req.flash('success', 'Welcome ' + user.username))
          done(null, user)
        } else {
          debug('Passwords FAIL - failureRedirect >>>>>')
          // done(null, false, req.flash('message', 'Incorrect Password'))
          done(null, false)
        }
      } else {
        debug('El usuario no existe.')
        // return done(null, false)
        done(null, false)
      }
    }
  )
)

passport.use('local.signup',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      // debug('SignUp')
      // debug(req.body)
      const { email, age, roleId, online } = req.body
      const newUser = {
        name: username,
        password,
        email,
        age,
        roleId,
        online
      }
      // debug('Encrypt password')
      newUser.password = await helpers.encryptPassword(password)

      // Saving in the Database
      // debug('Saving user in Database')
      const resultado = await model.create(newUser)
      newUser.id = resultado.id
      return done(null, newUser)
    }
  )
)

passport.serializeUser((user, done) => {
  debug('Serialize user. Asignamos el user.id', user.id)
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  debug('DES - Serialize user. Buscamos usuario ', id)
  const data = await model.findOne({ where: { id } })
  done(null, data)
})
