const { Events } = require('discord.js');
const { timerChannel } = require('../config.json');
const { initiateTimers } = require('../controllers/initiateTimers.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log('Bot Ready');

		initiateTimers(client.channels);
	},
};
