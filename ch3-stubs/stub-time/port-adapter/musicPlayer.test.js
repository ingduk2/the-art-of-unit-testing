const { playMusic, inject } = require('./musicPlayer');

test('should pretend to play a song with injected dependency', () => {
    const fakePlayer = {
        play: (song) => `Pretending to play ${song}`
    }

    inject({ player: fakePlayer });

    const result = playMusic('Harry Potter Theme');
    expect(result).toBe('Pretending to play Harry Potter Theme');
});