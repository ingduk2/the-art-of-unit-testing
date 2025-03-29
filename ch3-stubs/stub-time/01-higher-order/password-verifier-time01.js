const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

const makeVerifier = (rules, dayOfWeekFn) => {
    return function(input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }
    }
};

module.exports = {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    makeVerifier
};