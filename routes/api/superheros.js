const express = require('express')
const { ctrl } = require('../../controllers')
const {
  validation,
  uploadMiddleware,
  asyncTryCatch,
} = require('../../middleware')
const { schema } = require('../../model/superhero')
const router = express.Router()

router.get('/', asyncTryCatch(ctrl.getAll))

router.post(
  '/',
  validation(schema),
  uploadMiddleware.single('file'),
  asyncTryCatch(ctrl.addSuperhero)
)

router.get('/:id', asyncTryCatch(ctrl.getById))

router.put(
  '/:id',
  validation(schema),
  uploadMiddleware.single('file'),
  asyncTryCatch(ctrl.updateById)
)

router.delete('/:id', asyncTryCatch(ctrl.deleteById))

module.exports = router
