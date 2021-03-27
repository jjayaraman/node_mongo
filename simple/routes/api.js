var express = require('express');
var router = express.Router();
var listingService = require('../service/listings')
var client = require('../utils/connect')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/listings", async (req, res) => {
  const data = await listingService.listings();
  res.json(data);
})


router.get("/test", async (req, res) => {
  try {
    await client.connect();
    const database = client.db('airbnb')
    const listings = database.collection("listings")
    const query = {}
    const options = {}
    listings.find(query, options).limit(10).toArray((err, data) => {
      if (err) {
        res.json({ error: true })
      }
      res.json({ data: data });
    })

  } catch (error) {
    console.error("Error ::: ", error);
    res.json({ error: true })
  } finally {
    // client.close();
  }

})

router.get("/test2", async (req, res) => {
  try {
    await client.connect();
    const database = client.db('airbnb')
    const listings = database.collection("listings")
    const query = {}
    const options = {}
    var cursor = await listings.find(query, options).limit(10)
    // console.log("docs zz", cursor.toArray());
    res.json({ data: cursor.toArray() });

  } catch (error) {
    console.error("Error ::: ", error);
    res.json({ error: true })
  } finally {
    // client.close();
  }

})

module.exports = router;
