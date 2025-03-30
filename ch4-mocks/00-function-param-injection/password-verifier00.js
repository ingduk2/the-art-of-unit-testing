const log = require('./complicated-logger');

const verifyPassword = (input, rules) => {
    const failed = rules
        .map(rule => rule(input))
        .filter(result => result === false);
    
    if (failed.count === 0) {
        log.info('PASSED');
        return true;
    }

    log.info('FAIL');
    return false;
}