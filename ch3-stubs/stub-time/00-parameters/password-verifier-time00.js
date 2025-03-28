const moment = require('moment');
const SUNDAY = 0;
const SATURDAY = 6;

const verifyPassword = (input, rules) => {
    const dayOfWeek = moment().day();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }

    return [];
}

const verifyPassword2 = (input, rules, currentDay) => {
    if ([SATURDAY, SUNDAY].includes(currentDay)) {
        throw Error("It's the weekend!");
    }

    return [];
} 

module.exports = {
    verifyPassword,
    verifyPassword2
};