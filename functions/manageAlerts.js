let timer_handles = [];

export const createTimer = (channel, boss_name, boss_time) => {

    if (boss_name in timer_handles) {
        clearTimeout(timer_handles[boss_name])
    }

    if (boss_time >= (3 * 60 * 1000)) {
        timer_handles[boss_name] = setTimeout(function() {
            channel.send({
                content: `${boss_name} due in 3 minutes!`,
            })}
            , boss_time - (3 * 60 * 1000));
    }
}