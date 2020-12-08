const debug = require('debug')('src:router:loadFile')
const express = require('express')
const multer = require('multer')
const path = require('path')

const router = express.Router()

/** 
 * Cómo va a procesar el fichero.
 * destination : Destino.
 * filename: Nombre del fichero a guardar
 */
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../files/uploads'),
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}_${Date.now()}`)
  }
})
// se lo asignamos al 
const upload  = multer({ storage })

// Carga '/loadFile'
router.get('/', (req, res, next) => {
  debug('[ GET /api/loadFile ]')
  res.render('loadFile')
  next()
})

/**
 * GUARDAR 1 FICHERO.
 * Procesa el fichero enviado por el input 'file'.
 */
router.post('/upload', upload.single('file'), (req, res, next) => {
  // const file = req.file
  debug(req.file)
  if (!req.file) {
    const error = new Error('Please upload a file')
    debug(error)
    error.httpStatusCode = 400
    return next(error)
  }
    return res.send(req.file)
    // return next(null, req.file)
})
/** 
 * GUARDAR MULTIPLES FICHEROS.
 * Procesa el array de ficheros enviados por el input 'files'.
 */
router.post('/uploadmultiple', upload.array('files'), (req, res, next) => {
  // const file = req.file
  debug(req.files)
  if (!req.files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }
   return res.send(req.file)
})

module.exports = router
