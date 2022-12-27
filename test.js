const bosses = require('./bosses.json');

let bossAlertTimes = bosses['Unox'].splice(1)


bossAlertTimes.forEach(timer => {
    console.log(timer)
});



console.log(bossAlertTimes)