var worker = require('../controllers/worker');

module.exports = function (app) {
  app.get('/process',worker.process); 
};