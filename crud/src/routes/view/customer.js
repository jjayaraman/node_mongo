var express = require('express');
var router = express.Router();
var { listings } = require('../../service/listings')

router.get("/create", async (req, res) => {
    await listings()
        .then(rows => {
            res.render("customer/createCustomer", { rows });
        }).catch(er => {
            res.render("customer/createCustomer", { error: true });
        });
})

module.exports = router