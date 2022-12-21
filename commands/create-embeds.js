const { SlashCommandBuilder } = require('discord.js');
const { createEmbeds } = require('../controllers/manageEmbed.js');
const { timerChannel } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create-embeds')
		.setDescription('DONT USE - creates initial embeds for timers')
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		if (interaction.channelId == timerChannel) {
			await createEmbeds(interaction.client.channels.cache.get(timerChannel));

			await interaction.reply('embeds created');
			await interaction.deleteReply();
			console.log(`CommandLogger: ${interaction.commandName}, run by ${interaction.user.username} in ${interaction.channelId} at ${interaction.createdAt}`);
		}
		else {
			await interaction.deferReply({ ephemeral: true })
            await interaction.deleteReply();
		}
	},
};