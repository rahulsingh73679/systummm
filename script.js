// Designed by:  ian zhao

// Original image: https://dribbble.com/shots/2893304-Car
const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

playButton.addEventListener('click', () => {
    audio.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
});