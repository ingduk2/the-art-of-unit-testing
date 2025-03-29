const originalDependencies = {
    moment: require('moment'),
};

let dependencies = { ...originalDependencies };

const inject = (fakes) => {
    Object.assign(dependencies, fakes);
    return function reset() {
        dependencies = { ...originalDependencies };
    };
};

const SUNDAY = 0;
const SATURDAY = 6;

const verifyPassword = (input, rules) => {
    const dayOfWeek = dependencies.moment().day();

    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }

    return [];
}

module.exports = {
    SATURDAY,
    verifyPassword,
    inject
};