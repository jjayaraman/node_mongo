var client = require('./utils/connect');


exports.getCustomers = () => {

    return new Promise(async (resolve, reject) => {

        try {
            const con = await client.connect();
            const db = con.db('mns');
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

