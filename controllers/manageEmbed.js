const { EmbedBuilder } = require('discord.js');

const defaultDlEmbed = new EmbedBuilder()
	.setColor(0x4e4e4e)
	.setTitle('Dragonlord:')
	.addFields(
		{ name: 'Priest', value: 'unset', inline: true },
		{ name: 'King', value: 'unset', inline: true },
		{ name: 'Sreng', value: 'unset', inline: true },
		{ name: 'Troll', value: 'unset', inline: true },
	);

const defaultEdlEmbed = new EmbedBuilder()
	.setColor(0x4e4e4e)
	.setTitle('Exalted Dragonlord:')
	.addFields(
		{ name: 'Onyx', value: 'unset', inline: true },
		{ name: 'Skath', value: 'unset', inline: true },
		{ name: 'Gron', value: 'unset', inline: true },
		{ name: 'Dobby', value: 'unset', inline: true },
        { name: 'Flappy', value: 'unset', inline: true },
		{ name: 'Phantom', value: 'unset', inline: true },
		{ name: 'Unox', value: 'unset', inline: true },
	);

const defaultHeliEmbed = new EmbedBuilder()
	.setColor(0x4e4e4e)
	.setTitle('Heliants:')
	.addFields(
		{ name: 'Heli(prot)', value: 'unset', inline: true },
		{ name: 'Heli(hall)', value: 'unset', inline: true },
		{ name: 'Heli(eye)', value: 'unset', inline: true },
		{ name: 'Heli(gele)', value: 'unset', inline: true },
	);

const defaultEgEmbed = new EmbedBuilder()
	.setColor(0x4e4e4e)
	.setTitle('End Game:')
	.setDescription('Timers for when spawn windows open:')
	.addFields(
		{ name: 'Aggy', value: 'unset', inline: true},
		{ name: 'Hrung', value: 'unset', inline: true },
		{ name: 'Necro', value: 'unset', inline: true },
		{ name: 'Mord', value: 'unset', inline: true },
		{ name: 'Prot', value: 'unset', inline: true },
		{ name: 'Gele', value: 'unset', inline: true },
		{ name: 'Bt', value: 'unset', inline: true },
		{ name: 'Dino', value: 'unset', inline: true },
	);

let embedMessage = null;
let dlEmbed = null;
let edlEmbed = null;
let heliEmbed = null;
let egEmebed = null;

const createEmbeds = (channel) => {
    channel.send({ embeds: [defaultDlEmbed, defaultEdlEmbed, defaultHeliEmbed, defaultEgEmbed] })
};

const editEmbeds = async (channel, boss_name, new_time) => {
	// Fetch and set the embeds if they are currently null
	await channel.messages.fetch({ limit: 1 }).then(messages => {

		messages.forEach(msg => {
			embedMessage = msg;
			dlEmbed = msg.embeds[0];
			edlEmbed = msg.embeds[1];
			heliEmbed = msg.embeds[2];
			egEmebed = msg.embeds[3];
		});

		embedMessage.embeds.forEach(embed => {
			let boss_field = embed.fields.find(field => field.name === `${boss_name}`)
			if (boss_field) {
				boss_field.value = `<t:${new_time}:R>`
			}
		})
		embedMessage.edit({embeds: [dlEmbed, edlEmbed, heliEmbed, egEmebed]})
	})
}

const readEmbedsRecreateTimers = () => {
	
}

module.exports = {createEmbeds, editEmbeds, readEmbedsRecreateTimers};