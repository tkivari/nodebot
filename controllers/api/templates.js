module.exports = {
  
  /*
    this is a function both the bot and the api can use
  */
  mktpl: function(params) {
    return "this function will create and return the tpl";
  },

  createTemplate: function(request, response, next) {
    var model = require('../../models/template');
    var libs = require('../../libs/utils');
    libs.setDefaultResponseHeaders(response);

    var tpl = module.exports.mktpl(request);

    response.send(tpl);

  }  
  
};