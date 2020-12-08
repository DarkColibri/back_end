const debug = require('debug')('src:router:auth')
const debugf = require('debug')('src:router:auth:fuction')

const express = require('express')

const router = express.Router()
const { signUp, signIn, logOut } = require('../controllers/auth.controller')

function isAuthenticated(req, res, next) {
  debugf('[ isAuthenticated() ]')
  // debugf(`[ HEADERS ]`)
  // debugf(req.headers)
  debugf(`[ COOKIE ]`)
  debugf(req.headers.cookie)
  debugf(`[ SESSION ID ]${req.sessionID}`)
  if(req.isAuthenticated()) {
    debugf('User loged ... [ YES ]')
    return next()
  }
  debugf(' User loged ... [ NO ]')
  return false
  // res.redirect('/')
}
// LOGIN
// If this function gets called, authentication was successful.
// `req.user` contains the authenticated user.
router.post('/signin', signIn, (req, res) => {  
  debug('[ POST /signin ]')
  debug(`[ COOKIE ]`)
  debug(req.headers.cookie)
  debug(`[ SESSION ID ]${req.sessionID}`)
  // res.render('profile')
  res.send(req.user)
})
// REGISTRO
router.post('/signup', signUp)
// LOGOUT
router.get('/logout', logOut, (req, res) => {
  debug(' GET /logout')
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  // LOGOUT
  req.logout()
  // SESSION OUT
  req.session.destroy()
  res.clearCookie('cookie_dg', { path: '/' })

  res.send(null)
})
// LOGUEADO ?
router.get('/isLogin', isAuthenticated, (req, res) => {
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  res.send(req.user)
})
// **************************************************************
// ************* PRUEBAS ****************************************
// **************************************************************
function pruebaIsAuthenticated(req, res, next) {
  debugf('[ isAuthenticated() ]')
  // debugf(`[ HEADERS ]`)
  // debugf(req.headers)
  debugf(`[ COOKIE ]`)
  debugf(req.headers.cookie)
  debugf(`[ SESSION ID ]${req.sessionID}`)
  if(req.isAuthenticated()) {
    debugf('User loged ... [ YES ]')
    return next()
  }
  debugf(' User loged ... [ NO ]')
  res.redirect('/')
  return false
  
}
// INDEX
router.get('/', (req, res, next) => {
  debug('[ GET / ]')
  debug('[ GET /prueba/profile ]')
  debug(`[ COOKIE ]`)
  debug(req.headers.cookie)
  debug(`[ SESSION ID] ${req.sessionID}`)
  res.render('index')
  next()
})
// PROFILE
router.get('/prueba/profile', pruebaIsAuthenticated, (req, res, next) => {
  debug('[ GET /prueba/profile ]')
  debug(`[ COOKIE ]`)
  debug(req.headers.cookie)
  debug(`[ SESSION ID ]${req.sessionID}`)
  res.render('profile')
  // next()
})
// LOGIN
router.get('/prueba/signin', (req, res, next) => {
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  res.render('signin')
  next()
})
router.post('/prueba/signin', signIn, (req, res, next) => {
  debug('[ POST /prueba/signin ]')
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  debug('[ POST /signin ]')
  debug(`[ COOKIE ]`)
  debug(req.headers.cookie)
  res.render('profile')
  next()
})
// REGISTRO
router.get('/prueba/signup', signUp, (req, res, next) => {
  res.render('signup')
  next()
})
// LOGOUT
router.get('/prueba/logout', (req, res, next) => {
  debug(`[ SESSION ID ]: ${req.sessionID}`)
  // LOGOUT
  req.logout()
  // SESSION OUT
  req.session = null;
  res.clearCookie('cookie_dg', { path: '/' })
  res.render('index')
  next()
})
// ***************************************************************

module.exports = router
