var counter = new function() {
	this.count = 0;
}

module.exports = function(client) {
	return {
		onMessage: function(from, to, message) {
			var ptrn = new RegExp(/(((피|핏|휘|휫)(자|짜))+|(콜라|코(오)*올라)+|(안경(\s|\S)*미소녀))+\!+/);
			if(message.match(ptrn)) {
				counter.count++;
				client.say(to, to + "의 갸노 지수 : " + counter.count + "회");
			}
		}
	}
}
