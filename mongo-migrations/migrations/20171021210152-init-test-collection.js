'use strict';

const createCollection = async (db) => {
    await db.createCollection('test', {
        validator: {
            $and: [
                { _id: { $type: 'objectId' } },
                { name: { $type: 'string' } },
                { age: { $type: 'int' } },
            ],
        },
        validationAction: 'error',
        validationLevel: 'strict',
    })
};

module.exports = {

    async up(db) {
        try {
            const col = await db.listCollections({ name: 'test' }).toArray();
            if(col.length > 0) {
                throw new Error('Collection test already exists in MongoDb. Exited...')
            } else {
                await createCollection(db)
            }
        } catch(err) {
            throw err
        }
    },

    async down(db) {
        try {
            await db.dropCollection('games')
        } catch(err) {
            throw err
        }
    },

};