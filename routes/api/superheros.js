const express = require('express')
const { ctrl } = require('../../controllers')
const { validation, asyncTryCatch } = require('../../middleware')
const { schema } = require('../../model/superhero')
const router = express.Router()

router.get('/', asyncTryCatch(ctrl.getAll))

router.post('/', validation(schema), asyncTryCatch(ctrl.addSuperhero))

// router.get('/:contactId', asyncTryCatch(ctrl.getById))

// router.put('/:contactId', validation(schema), asyncTryCatch(ctrl.updateById))

// router.delete('/:contactId', asyncTryCatch(ctrl.deleteById))

module.exports = router
