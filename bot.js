var irc = require('irc');
var client = new irc.Client('irc.ozinger.org', 'BackDrumJS', {
	debug: true,
	showErrors : true,
	channels: ['#setzer']
});
client.addListener('join', function (channel, nick, message) {
	client.say(channel, "잇힝");
});
client.addListener('message', function (from, to, message) {
	console.log(from + ' => ' + to + ': ' + message);
});
