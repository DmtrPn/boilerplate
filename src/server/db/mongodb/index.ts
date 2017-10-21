import { MongoClient } from './db';

const state = {
    db: null
};

const DBConfig = {
    port: 27017,
    path: 'mongodb://localhost',
    name: 'test-example'
};

export const connect = () => MongoClient.connect(`${DBConfig.path}:${DBConfig.port}/${DBConfig.name}`)
    .then((db) => {
        console.log(`Connect to db ${DBConfig.name}`);
        state.db = db;
    });

export const getCollection = (collectionName) => state.db.collection(collectionName);