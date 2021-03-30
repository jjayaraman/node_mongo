var listingsDao = require('../data/listingsDao')


exports.viewAll = (req, res) => {
    listingsDao.viewAll(req)
        .then(data => {
            res.render('listings/viewAll', { data })
        })
        .catch(err => {
            res.render('listings/viewAll', { error: true })
        });
}

exports.form = (req, res) => {
    res.render('listings/create')
}