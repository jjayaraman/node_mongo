var express = require('express');
var router = express.Router();
var listingsController = require('../controllers/listingsController')

router.get('/viewall', listingsController.viewAll)
router.get('/create', listingsController.form)


module.exports = router