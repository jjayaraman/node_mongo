var customer = require('../data/customer')


exports.getCustomers = (req, res) => {
    customer.getCustomers()
        .then(data => {
            res.render('customer/viewAll', { data })
        })
        .catch(err => {
            res.render('customer/viewAll', { error: true })
        });
}

exports.form = (req, res) => {
    res.render('customer/create')
}