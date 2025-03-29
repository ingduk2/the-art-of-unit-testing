const MusicPlayerPort = require('./MusicPlayerPort');

class StreamingMusicPlayerAdapter extends MusicPlayerPort {
    play(song) {
        console.log(`Streaming ${song} from external service.`);
    }
}

module.exports = StreamingMusicPlayerAdapter;