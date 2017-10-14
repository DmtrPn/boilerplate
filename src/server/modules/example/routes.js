const express = require('express');
const ExampleController = require('./controllers/exampleController');

const routes = express.Router();

const exampleController = new ExampleController();

routes.get('/api/', exampleController.actionGetApi);

module.exports = routes;

