const MusicPlayerPort = require('./MusicPlayerPort');

class FakeMusicPlayerAdapter extends MusicPlayerPort {
    play(song) {
        return `Pretending to play ${song}`;
    }
}

module.exports = FakeMusicPlayerAdapter;