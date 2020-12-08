const debug = require('debug')('src:controller:auth')

const authCtrl = {}
const passport = require('passport')

// const URL = 'http://192.168.1.100:8082/'
// const URL = 'http://localhost:8081/'
// LOGIN
// authCtrl.signIn = passport.authenticate('local.signin', {
//   // successRedirect: 'http://192.168.1.100:8082/profile',
//   // successRedirect: 'http://localhost:8086/profile',
//   successRedirect: '/loginok',
//   failureRedirect: '/login'
// })

// LOGIN
authCtrl.signIn = passport.authenticate('local.signin')
// SIGNUP
authCtrl.signUp = passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
})
// LOGOUT
authCtrl.logOut = (req, res, next) => {
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  req.logOut()
  next()
}

// BORRAR

// authCtrl.renderSignUp = (req, res, next) => {
//   debug('SIGNUP')
//   res.render('auth/signup')
//   // Sigue con el proceso
//   next()
// }

// // Muestra pantalla de LOGIN
// authCtrl.renderSignIn = (req, res, next) => {
//   debug('SIGNIN')
//   res.render('auth/signin')
//   // Sigue con el proceso
//   next()
// }

module.exports = authCtrl
