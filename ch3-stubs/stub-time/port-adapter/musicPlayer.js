let dependencies = {
    player: {
        play: (song) => console.log(`Playing ${song}`)
    }
};

const inject = (fakes) => {
    Object.assign(dependencies, fakes);
};

const playMusic = (song) => {
    return dependencies.player.play(song);
};

module.exports = { playMusic, inject };