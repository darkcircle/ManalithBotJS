var counter = new function() {
	this.count = 0;
}

module.exports = function(client) {
	return {
		onMessage: function(from, to, message) {
			if(message == "졸렸... -ㅅ-") {
				counter.count++;
				client.say(to, to + "의 졸렸 지수 : " + counter.count + "회");
			}
		}
	}
}