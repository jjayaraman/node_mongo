var customerDao = require('../dao/customerDao')


exports.viewAll = (req, res) => {
    const db = req.app.locals.db_mns;
    customerDao.viewAll(db)
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