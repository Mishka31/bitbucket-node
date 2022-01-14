const express = require('express')
const { ctrl } = require('../../controllers')
const {
  validation,
  uploadMiddleware,
  asyncTryCatch,
} = require('../../middleware')
const { schema } = require('../../model/superhero')
const router = express.Router()
// const multer = require('multer')
// const path = require('path')

// const tempDir = path.join(__dirname, '../../temp')

// const upload = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir)
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
//   limits: {
//     fileSize: 2048,
//   },
// })

// const uploadMiddleware = multer({
//   storage: upload,
// })

router.get('/', asyncTryCatch(ctrl.getAll))

router.post(
  '/',
  validation(schema),
  uploadMiddleware.single('file'),
  asyncTryCatch(ctrl.addSuperhero)
)

// router.get('/:contactId', asyncTryCatch(ctrl.getById))

// router.put('/:contactId', validation(schema), asyncTryCatch(ctrl.updateById))

// router.delete('/:contactId', asyncTryCatch(ctrl.deleteById))

module.exports = router
