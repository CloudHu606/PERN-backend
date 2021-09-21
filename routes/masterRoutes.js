const todoRoutes = require('./todo/todoRoutes');

module.exports = (app) => {

    todoRoutes(app);
};