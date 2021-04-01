var { mongoClient } = require('../../src/dao/utils/connect')
var { viewAll } = require('../../src/dao/customerDao');
const { assert } = require('chai');

var db;
mongoClient.then(client => {
    db = client.db("mns")
})

describe('Test suite for Customer Dao', () => {

    it('should pass', async () => {
        var data = await viewAll(db)
        assert.exists(data);
    })

})
