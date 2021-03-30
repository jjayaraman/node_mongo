var express = require('express');
var router = express.Router();
var { getCustomers } = require('../data/customer')

router.get("/viewall", async (req, res) => {
    await getCustomers()
        .then(rows => {
            res.render("customer/viewAllCustomers", { rows });
        }).catch(er => {
            res.render("customer/viewAllCustomers", { error: true });
        }).finally(() => {

        });
})

router.get("/create", async (req, res) => {
    await getCustomers()
        .then(rows => {
            res.render("customer/createCustomer", { rows });
        }).catch(er => {
            res.render("customer/createCustomer", { error: true });
        });
})

module.exports = router