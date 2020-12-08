const debug = require('debug')('src-ssr:api:assocat:assocat.api')
const express = require('express')
const router = express.Router()
const crud = require('../crud')
const model = require('./model')

const api = 'assocat'
// ----------------------------------------------------------------------------------
// CRUD ROUTES
const resourceRoute = require('../../components/resource-route')

router.use('/', resourceRoute(api, crud))

// ---------------------------------------------------------------------------------
// OTHER ROUTES
// CATEGORIÍAS de una asociacion
router.get('/categories/:id', async (req, res) => {
  const { id } = req.params
  // debug(id)
  const data = await model.findAll({ where: { associationId: id } })
  // debug(data)
  res.send({ data })
})
// DELETE CATEGORIÍAS de una asociacion
router.delete('/asso/:id', async (req, res) => {
  const { id } = req.params
  const data = await model.destroy({ where: { associationId: id } })
  // debug(data)
  res.send({ data })
})
// DELETE PARANOID CATEGORIÍAS de una asociacion
router.delete('/categories/:id', async (req, res) => {
  const { id } = req.params
  const data = await model.destroy({ where: { associationId: id }, force: true })
  // debug(data)
  res.send({ data })
})

// ASOCIACIONES a de una categoria
router.get('/associations/:id', async (req, res) => {
  const { id } = req.params
  const data = await model.findAll({ where: { categoryId: id } })
  // debug(data)
  res.send({ data })
})
// router.get('/threads/:id', async (req, res) => {
//   const { id } = req.params
//   const data = await model.findAll({ where: { threadId: id } })
//   // console.log(data)
//   res.send(data)
//   // return { data }
// })

// ----------------------------------------------------------------------------------
module.exports = router
