const express = require('express')

const router = express.Router()
const crud = require('../crud')
const model = require('./model')

const api = 'threads'

// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')

router.use('/', resourceRoute(api, crud))

// ---------------------------------------------------------------------------------
// OTHER ROUTES
// router.get('/threads/:id', async (req, res) => {
//   const { id } = req.params
//   const data = await model.findAll({ where: { threadId: id } })
//   // console.log(data)
//   res.send(data)
//   // return { data }
// })

// ----------------------------------------------------------------------------------
module.exports = router
