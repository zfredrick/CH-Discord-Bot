let timer_handles = [];

const createTimer = (channel, boss_name, boss_time) => {

    if (boss_name in timer_handles) {
        clearTimeout(timer_handles[boss_name])
    }

    if (boss_time) {
        timer_handles[boss_name] = setTimeout(function() {
            channel.send({
                content: `${boss_name} is due!`,
            })

            let dateTime = new Date(Date.now());
            console.log(`AlertLogger: ${boss_name} due alert sent in ${channel} at ${dateTime.toString()}`);
        }
            , boss_time);
    }
}

module.exports = { createTimer };