var irc = require('irc'),
	config = require('./config');

var client = new irc.Client(config.server.host, config.server.nick, {
	debug: true,
	showErrors : true,
	channels: config.server.channels
});

client.addListener('message', function(from, to, message){
	console.log(from + ' => ' + to + ': ' + message);
});

for(var i = 0; i < config.plugins.length; i++) {
	var plugin = config.plugins[i](client);
	if(plugin.onJoin) client.addListener('join', plugin.onJoin);
	if(plugin.onMessage) client.addListener('message', plugin.onMessage);
}
