const video = document.getElementById('tv-video');
const staticGif = document.getElementById('static-gif');
const buttons = document.querySelectorAll('.button');

const powerButton = document.getElementById('power-btn');
let powerOn = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const newSrc = button.dataset.video
        if (!newSrc) return;
        video.src = newSrc;
        video.currentTime = 0;
        video.play().catch(err => {
            console.warn('could not play video: ', err);
        })
    })
})

powerButton.addEventListener('click', () => {
    powerOn = !powerOn;

    if (powerOn) {
        staticGif.style.opacity = "0";
        video.style.opacity = '1';
        video.play().catch(() => { });

    }
    else {
        video.pause();
        video.currentTime = 0;
        staticGif.style.opacity = "1";
        video.style.opacity = "0";

    }
})