var counter = new function() {
	this.count = 0;
}

module.exports = function(client) {
	return {
		onMessage: function(from, to, message) {
			var ptrn = new RegExp(/졸렸[\s\S]*\-ㅅ\-/);
			if(message.match(ptrn)) {
				counter.count++;
				client.say(to, to + "의 졸렸 지수 : " + counter.count + "회");
			}
		}
	}
}
