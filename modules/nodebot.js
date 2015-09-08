module.exports = {
  start: function(config) {
    var irc = require('irc');
    var client = new irc.Client(config.server,config.nick,config.options);
    var irc_controller = require('../controllers/nodebot/actions');
    irc_controller.setActions(client);
  }
};