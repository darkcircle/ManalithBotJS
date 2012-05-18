module.exports = {
	onJoin: function(channel, nick, message) {
		client.say(channel, "잇힝");
	},
	onMessage: function(from, to, message) {
		console.log(from + ' => ' + to + ': ' + message);
	}
}