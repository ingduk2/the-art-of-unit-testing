const LocalMusicPlayerAdapter = require('./LocalMusicPlayerAdapter');
const StreamingMusicPlayerAdapter = require('./StreamingMusicPlayerAdapter');

const musicPlayer = new LocalMusicPlayerAdapter();
musicPlayer.play('Harry Potter Theme');

const streamingMusicPlayer = new StreamingMusicPlayerAdapter();
streamingMusicPlayer.play('Harry Potter Theme');