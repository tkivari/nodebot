// sets up irc bot portion of the application
var nodebot_config = require('./config/nodebot');
var nodebot = require('./modules/nodebot');

nodebot.start(nodebot_config)
