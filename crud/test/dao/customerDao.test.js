var { mongoClient } = require('../../src/dao/utils/connect')
var { viewAll, findById } = require('../../src/dao/customerDao');
const { assert } = require('chai');

var db;

before(async () => {
    var client = await mongoClient;
    db = client.db("mns");
})


describe('Test suite for Customer Dao', () => {

    it('view all customers', async () => {
        var data = await viewAll(db)
        assert.exists(data);
    })


    it('find a customer by id', async () => {
        const id = 1;
        var data = await findById(db, id)
        assert.exists(data);
        assert.equal(1, data.length)

    })

})
