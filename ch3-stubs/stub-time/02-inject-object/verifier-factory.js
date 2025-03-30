const { RealtimeProvider } = require('./time-provider');
const { PasswordVerifier } = require('./password-verifier-time02');

const passwordVerifierFactory = (rules) => {
    return new PasswordVerifier(new RealtimeProvider());
}

module.exports = {
    passwordVerifierFactory,
};