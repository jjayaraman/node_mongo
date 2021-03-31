const { MongoClient } = require('mongodb');
const config = require('../../config/db_config.js')

const options = {
    useUnifiedTopology: true,
}

exports.mongoClient = MongoClient.connect(config.uri, options);
