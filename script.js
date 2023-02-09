document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase())
});
document.getElementById('Tocar')

function tocar() {
    const song = document.getElementById("input").value
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
}


function playSound(sound) {
    const audio = document.getElementById(`s_${sound}`);
    const key = document.querySelector(`div[data-key="${sound}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    if (key) {
        key.classList.add('active');

        setTimeout(function rem() {
            key.classList.remove('active')

        }, 300)
    }
}
function playComposition(songArray) {
    let time = 0;


    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, time);
        time += 270;
    }
}
