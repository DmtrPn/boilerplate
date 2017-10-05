const server = require('./server/server');
const db =require('../db');

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

