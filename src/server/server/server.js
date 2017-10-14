const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const logger = require('./middlewares/logging/logging');
const initRoutes = require('./middlewares/routes/initRoutes');
const app = express();


app.use(logger);
// parse application/x-www-form-urlencoded


app.use(bodyParser.urlencoded({ extended: false }));
//json parser
app.use(bodyParser.json());
// Serve static assets
app.use(express.static(path.resolve(__dirname, '../../../', 'public')));
// Init routes for api
initRoutes(app);
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../', 'public', 'index.html'));
});

module.exports = app;
