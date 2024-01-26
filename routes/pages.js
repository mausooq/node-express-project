const express = require('express');
const router = express.Router();
const controller =require('../controllers/auth')


router.get('/',controller.getContact).post('/',controller.createContact);
router.get('/:id',controller.getContacts).put('/:id',controller.updateContact).delete('/:id',controller.deleteContact);
module.exports = router;