const express = require('express')
const router = express.Router()

const ContactsController = require('../controller/contacts')

router.get('/', ContactsController.getAll)
router.post('/', ContactsController.create)
router.get('/:id', ContactsController.getById)
router.put('/:id', ContactsController.edit)
router.delete('/:id', ContactsController.delete)

module.exports = router