export const helpInfo = (channel, boss_list) => {

    channel.send({
        content: `The basic timer reset syntax is as follows: \nReset: <boss name> or CReset: <boss name> <minutes> for a custom reset time\ne.g. **Reset: unox** or **CReset: unox 10**\n\nList of usable boss names:\n-${Object.keys(boss_list).join('\r\n-')}`,
    })

}