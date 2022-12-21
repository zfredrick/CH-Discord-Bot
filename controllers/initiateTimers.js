const { timerChannel, alertChannel } = require('../config.json');
const { createTimer } = require('./manageAlerts');

const initiateTimers = async (channels) => {
    // read and create timers on startup

    const timer_channel = await channels.cache.get(timerChannel);
    const alert_channel = await channels.cache.get(alertChannel);
    
    await timer_channel.messages.fetch({ limit: 1 }).then(messages => {
        messages.forEach(msg => {  
            msg.embeds.forEach(embed => {
                embed.data.fields.forEach(field => {
                    let timeDue = field.value.split(':')[1]; 
                    if (field.value != 'unset' && timeDue > Math.floor(Date.now() / 1000)) {
                        createTimer(alert_channel, field.name, (timeDue - Math.floor(Date.now() / 1000)) * 1000);
                    }
                })
            })
        });
    });
}

module.exports = { initiateTimers };