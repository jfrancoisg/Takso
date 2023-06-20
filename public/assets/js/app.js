import { Chrono } from '../ts/Chrono';
const chrono = new Chrono();
const chrono2 = new Chrono();
function startButtonClicked() {
    chrono.start();
}
function stopButtonClicked() {
    chrono.stop();
}
const start1 = document.querySelector('#start1');
const stop1 = document.querySelector('#stop1');
const start2 = document.querySelector('#start2');
const stop2 = document.querySelector('#stop2');
const heure1 = document.querySelector('#heure');
const heure2 = document.querySelector('#heure');
start1?.addEventListener('click', startButtonClicked);
stop1?.addEventListener('click', stopButtonClicked);
start2?.addEventListener('click', startButtonClicked);
stop2?.addEventListener('click', stopButtonClicked);
