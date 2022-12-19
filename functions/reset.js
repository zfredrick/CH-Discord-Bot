import { create } from "ts-node";
import { editEmbeds } from "./manageEmbed.js";
import { createTimer } from "./manageAlerts.js";

export const resetTimer = (message, channels, boss_list) => {
    let resetChannel = channels.get(process.env.RESETCHANNEL);
    let timerChannel = channels.get(process.env.TIMERCHANNEL);
    let alertChannel = channels.get(process.env.ALERTCHANNEL);

    // Split the message by white space and set the specified boss name
    let msg_array = message.content.split(/\s+/);
    let boss_name = msg_array[1]?.toLocaleLowerCase();
    
    // Check if reset message is valid
    if (msg_array[0] === 'Reset:' && boss_name in boss_list && msg_array.length > 1) {
        resetChannel.send({
            content: `${boss_name} reset!`,
        })

        let capital_boss_name = boss_name[0].toUpperCase() + boss_name.slice(1);
        let new_unix_time = Math.floor(Date.now() / 1000) + (boss_list[boss_name] * 60);

        editEmbeds(timerChannel, capital_boss_name, new_unix_time);
        createTimer(alertChannel, capital_boss_name, boss_list[boss_name] * (60 * 1000));
    }
    
    // If the message contains an unknown boss name
    else if (msg_array[0] === 'Reset:' && !(boss_name in boss_list) && msg_array.length > 1) {
        resetChannel.send({
            content: 'Error: Unknown boss name entered, please type ?help for boss names info.',
        })
    }

    // If the message contains no boss name
    else if (msg_array[0] === 'Reset:' && msg_array.length <= 1) {
        resetChannel.send({
            content: 'Error: Boss name cannot be empty, please type ?help for boss names info.',
        })
    }

    else { return; }
    
};