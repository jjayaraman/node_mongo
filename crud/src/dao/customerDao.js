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

exports.findById = (db, id) => {

    return new Promise(async (resolve, reject) => {

        try {
            const listings = db.collection("customer");
            const query = { id: id };
            listings.find(query).toArray((err, doc) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(doc[0]);
                }
            })
        } catch (error) {
            reject(error);
        }
    })

}

