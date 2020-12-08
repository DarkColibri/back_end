const debug = require('debug')('src:api:post:post.api')
const express = require('express')
const router = express.Router()
const post = require('../crud')
const model = require('./model')

// ---------------------------------------------------------------------------------
// OTHER ROUTES
router.get('/threads/:id', async (req, res) => {
  const { id } = req.params
  const response = await model.findAll({ where: { threadId: id } })
  debug(response[0])
  res.send({ data: response })
  // return { data }
})

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')
router.use('/', resourceRoute('posts', post))

// ----------------------------------------------------------------------------------
module.exports = router
