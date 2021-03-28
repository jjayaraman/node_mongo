const { MongoClient } = require('mongodb');
const config = require('./config.js')

const options = {
    useUnifiedTopology: true,
    // userNewUrlParser: true,
    // loggerLevel: "debug",
}

const client = new MongoClient(config.uri, options)

module.exports = client;