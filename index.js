import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

import { resetTimer } from './functions/Reset.js';
import { customResetTimer } from './functions/customReset.js';
import { helpInfo } from './functions/help.js';
import { createEmbeds, readEmbedsRecreateTimers } from './functions/manageEmbed.js';
//import { SlashCommandBuilder } from '@discordjs/builders';

// List of boss names and their spawn times
const boss_list = {
    "priest" : 70,
    "king" : 75,
    "sreng" : 80,
    "troll" : 90,
    "onyx" : 80,
    "skath" : 90,
    "gron" : 100,
    "dobby" : 110,
    "flappy" : 115,
    "phantom" : 125,
    "unox" : 135,
    "heli(prot)": 240,
    "heli(hall)": 240,
    "heli(eye)": 240,
    "heli(gele)": 240,
    "aggy": 2160,
    "hrung" : 2160,
    "necro" : 2160,
    "mord" : 2160,
    "prot" : 1200,
    "gele" : 2880,
    "bt" : 2880,
    "dino": 2880,
}


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.on('ready', () => {
    console.log('Bot Ready');

    const guild = client.guilds.cache.get(process.env.GUILDID);
    let commands;

    if (guild) {
        commands = guild.commands;
    } 
    else {
        commands = client.application?.commands;
    }

    commands?.create({
        name: 'reset',
        description: 'resets boss time'
    })

    readEmbedsRecreateTimers();
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'reset') {
        interaction.reply({
            content: 'pong'
        })
    }
})

// client.on('messageCreate', (message) => {

//     // Check for the word 'CReset:'
//      if (message.content.includes("CReset:") && message.channel.id === process.env.RESETCHANNEL) {
//         customResetTimer(message, client.channels.cache, boss_list);
//     }

//     // Check for the word 'Reset:' in messages sent to the boss reset channel
//     else if (message.content.includes("Reset:") && message.channel.id === process.env.RESETCHANNEL) {
//         resetTimer(message, client.channels.cache, boss_list);
//     }

//     // Check for the word '?help'
//     else if ((message.content === "?help" && message.channel.id === process.env.RESETCHANNEL)) {
//         helpInfo(client.channels.cache.get(process.env.RESETCHANNEL), boss_list);
//     }

//     // Check for the word '?Create_Embeds'
//     else if ((message.content === "?Create_Embeds" && message.channel.id === process.env.TIMERCHANNEL)) {
//         createEmbeds(client.channels.cache.get(process.env.TIMERCHANNEL));
//     }

// });

client.login(process.env.TOKEN);