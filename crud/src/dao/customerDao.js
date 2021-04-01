var client = require('./utils/connect');


exports.viewAll = (db) => {

    return new Promise(async (resolve, reject) => {

        try {
            const listings = db.collection("customer");
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

