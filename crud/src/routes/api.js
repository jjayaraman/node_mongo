var express = require('express');
var router = express.Router();
var { listings } = require('./../service/listings')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get("/listings", async (req, res) => {

  await listings()
    .then(data => {
      res.json(data)
    }).catch(er => {
      res.json({ error: true })
    });
})

module.exports = router;
