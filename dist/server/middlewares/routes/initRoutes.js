const exampleRoutes = require('../../../modules/example/routes');

module.exports = initRoutes = function (app) {
    app.use(exampleRoutes)
};