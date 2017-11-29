const assert = require('assert')
const fs = require('mz/fs');
const async = require('../async')

describe('#async.js', () => {
    describe('#async()',() =>{
        it('#async function', async () => {
            let r = await async();
            assert.strictEqual(r, 15);
        })
    })
})
