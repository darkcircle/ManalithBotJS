module.exports = function(client) {
	return {
		onJoin: function(channel, nick, message) {
			client.say(channel, "안녕하세요!");
		},
		onMessage: function(from, to, message) {
			if(message == client.opt.nick + ", 퍽퍽") {
				client.action(to, from + "님을 째려봅니다.");
			}
		}
	}
}