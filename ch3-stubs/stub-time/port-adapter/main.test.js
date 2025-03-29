const FakeMusicPlayerAdapter = require('./FakeMusicPlayerAdapter');

test('should pretene to play a song', () => {
    const musicPlayer = new FakeMusicPlayerAdapter();
    const result = musicPlayer.play('Harry Potter Theme');
    expect(result).toBe('Pretending to play Harry Potter Theme');
});