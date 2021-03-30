var express = require('express');
var router = express.Router();

/* Home page - Redirect to view all customers */
router.get('/', function (req, res, next) {
  res.redirect('/customer/viewall')
});


module.exports = router;
