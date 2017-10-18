const db = require('./db');

const DBConfig = require('../../config/db').mongodb;

module.exports = (initFunction) => db.connect(`${DBConfig.path}:${DBConfig.port}/${DBConfig.name}`,
    function(err) {
        if (err) {
            return console.log(err);
        }
        initFunction
    }
);