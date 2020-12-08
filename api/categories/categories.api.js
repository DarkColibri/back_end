const debug = require('debug')('src-ssr:api:association:association.api')
const express = require('express')
const router = express.Router()
const crud = require('../crud')
const model = require('./model')

const api = 'categories'

// // ---------------------------------------------------------------------------------
// // OTHER ROUTES
// router.get('/name/:id', async (req, res) => {
//   const { id } = req.params
//   const response = await model.findAll({ where: { id } })
//   // const { data } = response.data
//   console.log(response[0].name)
//   res.send(response[0].name)
//   // return { data }
// })

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')
router.use('/', resourceRoute(api, crud))

// ----------------------------------------------------------------------------------
module.exports = router
