const { SlashCommandBuilder } = require('discord.js');
const { clearEmbeds } = require('../controllers/manageEmbed.js');
const { clearTimers } =  require('../controllers/manageAlerts.js');
const { timerChannel } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear-timers')
		.setDescription('clears all timers')
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		if (interaction.channelId == timerChannel) {
			await clearEmbeds(interaction.client.channels.cache.get(timerChannel));
            clearTimers();

			await interaction.reply('timers cleared');
			await interaction.deleteReply();
			console.log(`CommandLogger: ${interaction.commandName}, run by ${interaction.user.username} in ${interaction.channelId} at ${interaction.createdAt}`);
		}
		else {
			await interaction.deferReply({ ephemeral: true })
            await interaction.deleteReply();
		}
	},
};