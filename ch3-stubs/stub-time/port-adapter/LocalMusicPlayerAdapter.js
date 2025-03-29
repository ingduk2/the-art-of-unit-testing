const MusicPlayerPort = require('./MusicPlayerPort');

class LocalMusicPlayerAdapter extends MusicPlayerPort {
    play(song) {
        console.log(`Playing ${song} from local file system.`);
    }
}

module.exports = LocalMusicPlayerAdapter;