module.exports = {
  initialize: function(server, controllers) {
    server.post('/api/templates', controllers.templates.createTemplate);
  }
};