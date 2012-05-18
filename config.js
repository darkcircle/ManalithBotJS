module.exports = {
	server: {
		host: "irc.ozinger.org",
		nick: "ManalithBotJS",
		channels: [
			"#setzer"
		]
	},
	plugins: [
		require("./lib/plugins/sample_plugin"),
		require("./lib/plugins/sample_plugin2")
	]
}