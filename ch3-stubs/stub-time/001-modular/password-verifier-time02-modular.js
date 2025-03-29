const SUNDAY = 0;
const SATURDAY = 6;

const Verifier = function(rules, dayOfWeekFn) {
    this.verify = function (input) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        };
    };
};

module.exports = { SUNDAY, SATURDAY, Verifier };