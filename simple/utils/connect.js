const { MongoClient } = require('mongodb');

const URI = process.env.mongodb_uri || 'mongodb://localhost:27017'

const options = {
    useUnifiedTopology: true
    // userNewUrlParser: true,
    // useUnifiedTopology: true
}
console.log("uri : ", URI);

const client = new MongoClient(URI, options)

module.exports = client;