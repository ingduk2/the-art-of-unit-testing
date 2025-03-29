class MusicPlayerPort {
    play(song) {
        throw new Error('play method must be implemented');
    }
}

module.exports = MusicPlayerPort;