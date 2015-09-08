module.exports = {
  listen: function() {
    var restify = require('restify');
    var server = restify.createServer();
    server.use(restify.bodyParser());

    var controllers = {
      templates: require('../controllers/api/templates')
    };

    var routes = require('../routes');
    routes.initialize(server, controllers);

    server.listen(3000, function () {
      console.log('%s listening at %s', server.name, server.url);
    });    

    // var mongoose = require('mongoose');
    // var mongoose_config = require('./config/mongoose');
    // mongoose.connect()

    // var Template = require('../models/template')
    // var Word = require('../models/word')


  }
};