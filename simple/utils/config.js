// Configuration to put all environment variables in one place. Reads from .env file
var env = require('dotenv')
env.config({})

module.exports = {
    uri: process.env.mongodb_uri
}
