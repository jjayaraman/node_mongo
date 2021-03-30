var client = require('../utils/connect');


const listings = () => {

    return new Promise(async (resolve, reject) => {

        try {
            const con = await client.connect();
            const db = con.db('airbnb');
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


module.exports = { listings }
