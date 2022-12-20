import { editEmbeds } from "../controllers/manageEmbed.js";
import { createTimer } from "../controllers/manageAlerts.js";

export const customResetTimer = (message, channels, boss_list) => {
    let resetChannel = channels.get(process.env.RESETCHANNEL);
    let timerChannel = channels.get(process.env.TIMERCHANNEL);
    let alertChannel = channels.get(process.env.ALERTCHANNEL);

    // Split the message by white space and set the specified boss name
    let msg_array = message.content.split(/\s+/);
    let boss_name = msg_array[1]?.toLocaleLowerCase();
    let custom_time = Number(msg_array[2]);

    // Check if reset message is valid
    if (msg_array[0] === 'CReset:' && boss_name in boss_list && msg_array.length > 1) {
        let capital_boss_name = boss_name[0].toUpperCase() + boss_name.slice(1);
        let new_unix_time = Math.floor(Date.now() / 1000)

        if (custom_time && custom_time > 0) {
            new_unix_time += (custom_time*60);
            editEmbeds(timerChannel, capital_boss_name, new_unix_time);
            createTimer(alertChannel, capital_boss_name, custom_time * (60 * 1000));

            resetChannel.send({
                content: `${boss_name} reset!`,
            })
        } else {
            resetChannel.send({
                content: 'Error: CReset custom time value must be a valid number and more than 0.',
            })
        }

    }
    
    // If the message contains an unknown boss name
    else if (msg_array[0] === 'CReset:' && !(boss_name in boss_list) && msg_array.length > 1) {
        resetChannel.send({
            content: 'Error: Unknown boss name entered, please type ?help for boss names info.',
        })
    }

    // If the message contains no boss name
    else if (msg_array[0] === 'CReset:' && msg_array.length <= 1) {
        resetChannel.send({
            content: 'Error: Boss name cannot be empty, please type ?help for boss names info.',
        })
    }

    else { return; }
    
};