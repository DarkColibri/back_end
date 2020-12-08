const debug = require('debug')('src-ssr:api:post:post.api')
const express = require('express')
const router = express.Router()
const crud = require('../crud')
const model = require('./model')

// ---------------------------------------------------------------------------------
// OTHER ROUTES
// router.get('/from/:id', async (req, res) => {
//   const { id } = req.params
//   const data = await model.findAll({ where: { from: id } })
//   //   debug(response[0])
//   //   res.send({ data: response })
//   // return { data }
//   res.send({ data })
// })

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')
router.use('/', resourceRoute('posts', crud))

// ----------------------------------------------------------------------------------
module.exports = router
