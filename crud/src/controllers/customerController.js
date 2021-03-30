var customerDao = require('../data/customerDao')


exports.viewAll = (req, res) => {
    customerDao.viewAll(req)
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