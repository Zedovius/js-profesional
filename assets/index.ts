import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()], 
});

const buttonPlayPause: HTMLElement = document.getElementById('play-pause');
buttonPlayPause.onclick = () => player.togglePlay();

const buttonUnmuteMute: HTMLElement = document.getElementById('mute-unmute');
buttonUnmuteMute.onclick = () => player.toggleSound();

//Vamos a preguntar al browser si soporta service workers

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.error(error.message);
    })
}