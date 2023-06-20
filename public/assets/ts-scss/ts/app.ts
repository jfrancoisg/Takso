import { Chrono } from '../ts/Chrono'

const chrono = new Chrono()
const chrono2 = new Chrono()

function startButtonClicked() {
    chrono.start();
}

function stopButtonClicked() {
    chrono.stop();
}

const start1 = <HTMLInputElement>document.querySelector('#start1');
const stop1 = <HTMLInputElement>document.querySelector('#stop1');
const start2 = <HTMLInputElement>document.querySelector('#start2');
const stop2 = <HTMLInputElement>document.querySelector('#stop2');
const heure1 = <HTMLInputElement>document.querySelector('#heure');
const heure2 = <HTMLInputElement>document.querySelector('#heure');


start1?.addEventListener('click', startButtonClicked);
stop1?.addEventListener('click', stopButtonClicked);
start2?.addEventListener('click', startButtonClicked);
stop2?.addEventListener('click', stopButtonClicked);

