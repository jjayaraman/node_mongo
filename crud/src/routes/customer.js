var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController')

router.get('/viewall', customerController.viewAll)
router.get('/create', customerController.form)


module.exports = router