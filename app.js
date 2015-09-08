var _ = require('lodash')

// normally I'd probably split these into two distint services, 
// but I like the idea of only having the API available when the bot is online :)

// sets up irc bot portion of the application
var nodebot_config = require('./config/nodebot');
var nodebot = require('./modules/nodebot');
// start nodebot on IRC
nodebot.start(nodebot_config);

// sets up rest api portion of the application
var api = require('./modules/api');
api.listen();