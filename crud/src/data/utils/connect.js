const { MongoClient } = require('mongodb');
const config = require('../../config/db_config.js')

const options = {
    useUnifiedTopology: true,
}

const client = new MongoClient(config.uri, options)

module.exports = client;