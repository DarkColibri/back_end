const debug = require('debug')('src-ssr:api:post:post.api')
const express = require('express')
const router = express.Router()
const crud = require('../crud')
const model = require('./model')
const Sequelize = require('sequelize')

// ---------------------------------------------------------------------------------
// OTHER ROUTES
router.get('/:id/:id2', async (req, res) => {
  const { id, id2 } = req.params
  const data = await model.findAll({ where: Sequelize.or({ from: id, to: id2 }, { from: id2, to: id }) })
  //   debug(response[0])
  //   res.send({ data: response })
  // return { data }
  res.send({ data })
})

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')
router.use('/', resourceRoute('messages', crud))

// ----------------------------------------------------------------------------------
module.exports = router
