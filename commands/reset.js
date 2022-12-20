const { SlashCommandBuilder } = require('discord.js');
const { editEmbeds } = require('../controllers/manageEmbed.js');
const { createTimer } = require('../controllers/manageAlerts.js');
const { timerChannel, alertChannel } = require('../config.json');
const bosses  = require('../bosses.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reset')
		.setDescription('Resets a single bosses timer')
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
                )),
	async execute(interaction) {
        let bossName = interaction.options.getString('boss');

        let unixBossTime = Math.floor(Date.now() / 1000) + (bosses[bossName] * 60);

        editEmbeds(interaction.client.channels.cache.get(timerChannel), bossName, unixBossTime);
        createTimer(interaction.client.channels.cache.get(alertChannel), bossName, bosses[bossName] * (60 * 1000));

		await interaction.reply(`${bossName} timer reset!`);
        console.log(`CommandLogger: ${interaction.commandName}: ${bossName}, run by ${interaction.user.username} in ${interaction.channelId} at ${interaction.createdAt}`);
	},
};