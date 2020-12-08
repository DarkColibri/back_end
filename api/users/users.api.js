const debug = require('debug')('src:api:users:users.api')
const express = require('express')

const router = express.Router()
const crud = require('../crud')
// const model = require('./model')

const api = 'users'
const { isLoggedIn } = require('../../lib/auth')
// ---------------------------------------------------------------------------------
// USER LOGUED
router.get('/getUserLogin', (req, res) => {
  debug('USER LOGUED??')
  if (isLoggedIn(req)) {
    debug('res.send(req.user)')
    res.send(req.user)
  } else {
    debug('res.status(401).send(null)')
    res.status(401).send(null)
    // debug('{}')
    // res.send({})
  }
})

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')

router.use('/', resourceRoute(api, crud))

// ----------------------------------------------------------------------------------
module.exports = router
