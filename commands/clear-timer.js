const { SlashCommandBuilder } = require('discord.js');
const { clearSingleEmbed } = require('../controllers/manageEmbed.js');
const { clearTimer } =  require('../controllers/manageAlerts.js');
const { timerChannel } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear-timer')
		.setDescription('clears a single timer')
        .addStringOption(option =>
            option.setName('boss')
                .setDescription('The boss timer to reset')
                .setRequired(true)
                .addChoices(
                    { name: 'Priest', value: 'Priest' },
                    { name: 'King', value: 'King' },
                    { name: 'Sreng', value: 'Sreng' },
                    { name: 'Troll', value: 'Troll' },
                    { name: 'Onyx', value: 'Onyx' },
                    { name: 'Skath', value: 'Skath' },
                    { name: 'Gron', value: 'Gron' },
                    { name: 'Dobby', value: 'Dobby' },
                    { name: 'Flappy', value: 'Flappy' },
                    { name: 'Phantom', value: 'Phantom' },
                    { name: 'Unox', value: 'Unox' },
                    { name: 'Heli(prot)', value: 'Heli(prot)' },
                    { name: 'Heli(hall)', value: 'Heli(hall)' },
                    { name: 'Heli(eye)', value: 'Heli(eye)' },
                    { name: 'Heli(gele)', value: 'Heli(gele)' },
                    { name: 'Aggy', value: 'Aggy' },
                    { name: 'Hrung', value: 'Hrung' },
                    { name: 'Necro', value: 'Necro' },
                    { name: 'Mord', value: 'Mord' },
                    { name: 'Prot', value: 'Prot' },
                    { name: 'Gele', value: 'Gele' },
                    { name: 'Bt', value: 'Bt' },
                    { name: 'Dino', value: 'Dino' },
                ))
		.setDefaultMemberPermissions(0),
	async execute(interaction) {
		if (interaction.channelId == timerChannel) {
            let bossName = interaction.options.getString('boss');

			await clearSingleEmbed(interaction.client.channels.cache.get(timerChannel), bossName);
            clearTimer(bossName);

			await interaction.reply('timer cleared');
			await interaction.deleteReply();
			console.log(`CommandLogger: ${interaction.commandName}, run by ${interaction.user.username} in ${interaction.channelId} at ${interaction.createdAt}`);
		}
		else {
			await interaction.deferReply({ ephemeral: true })
            await interaction.deleteReply();
		}
	},
};