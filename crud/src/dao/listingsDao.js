var client = require('./utils/connect');


exports.viewAll = (req) => {

    return new Promise(async (resolve, reject) => {

        try {
            const db = req.app.locals.db_airbnb;
            const listings = db.collection("listings");
            const query = {};
            const LIMIT = 10;
            listings.find(query).limit(LIMIT).toArray((err, docs) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(docs);
                }
            })
        } catch (error) {
            reject(error);
        }
    })
}
