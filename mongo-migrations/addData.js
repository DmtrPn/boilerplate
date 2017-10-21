let Promise = require('bluebird');
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let Collection = mongodb.Collection;

Promise.promisifyAll(Collection.prototype);
Promise.promisifyAll(MongoClient);

const testData = [
    {
        name: 'Dima',
        age: 18
    },
    {
        name: 'Jack',
        age: 25
    },
    {
        name: 'Tom',
        age: 34
    }
];

let dbTestExample = null;
let testCollection = null;
MongoClient.connectAsync('mongodb://localhost:27017/test-example')
    .then(function(db) {
        dbTestExample = db;
        return db.collection('test');
    })
    .then(function(col) {
        testCollection = col;
        return testCollection.count();
    }).then(function(count) {
        if(count === 0) {
            testCollection.insertManyAsync(testData)
                .then(function(res) {
                    console.log('Added data: ', res);
                    dbTestExample.close();
                })
        } else {
            console.log('Data already added');
            dbTestExample.close();
        }
    })
    .catch(function(err) {
        // An error occurred
        console.log(err);
        dbTestExample.close();
    });