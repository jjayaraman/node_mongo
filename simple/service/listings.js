var client = require('../utils/connect');


const listings = () => {

    return new Promise(async (resolve, reject) => {

        try {

            const con = await client.connect();
            const db = con.db('airbnb')
            const listings = db.collection("listings")
            const query = {}

            listings.find(query).limit(10).toArray((err, docs) => {
                if (err) {
                    reject(err)
                } else {
                    console.log("docs ", docs.length);
                    resolve(docs);
                }
            })
        } catch (error) {
            console.error("ERROR ::: ", error);
            reject(error);
        }
    })
}


module.exports = { listings }
