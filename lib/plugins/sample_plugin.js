module.exports = function(client) {
	return {
		onJoin: function(channel, nick, message) {
			client.say(channel, "안녕하세요!");
		},
		onMessage: function(from, to, message) {
			var ptrn = new RegExp(/[\s\S]+[\\,\\:\\;\\.]?\\s퍽퍽/);
			console.log(message.match(ptrn));
			if(message.indexOf(client.opt.nick) == 0 && message.match(/(\s|\S)+[\,\:\;\.]?\s퍽퍽/) ) {
				
				client.action(to, from + "님을 째려봅니다.");
			}
		}
	}
}
