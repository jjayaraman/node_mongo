var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users...');
});

router.get('/hello', function (req, res, next) {
  var data = { dynamic: "....a dynamic text.." }
  res.render("hello", data)
});

module.exports = router;
