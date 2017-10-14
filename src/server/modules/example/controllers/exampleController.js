const ExampleService = require('../services/exampleService');

class ExampleController {
    actionGetApi(req, res) {
        const result = ExampleService.getApiText();
        res.send(result);
    }
}

module.exports = ExampleController;
