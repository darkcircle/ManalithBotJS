module.exports = function(client) {
	var counter = new function() {
		this.count = 0;
	}

	return {
		onJoin: function(channel, nick, message) {
			client.say(channel, "안녕하세요!");
		},
		onMessage: function(from, to, message) {
			if(message == client.opt.nick + ", 퍽퍽") {
				client.action(to, from + "님을 째려봅니다.");
			} else if(message == "졸렸... -ㅅ-") {
				counter.count++;
				client.say(to, to + "의 졸렸 지수 : " + counter.count + "회");
			}
		}
	}
}