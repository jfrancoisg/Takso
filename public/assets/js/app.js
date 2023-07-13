const chrono = document.querySelector("#chronometre");
const startBtnP = document.querySelector("#pStart");
const stopBtnP = document.querySelector("#pEnd");
const startBtnEt = document.querySelector("#etStart");
const stopBtnEt = document.querySelector("#etEnd");
const startBtnEf = document.querySelector("#efStart");
const stopBtnEf = document.querySelector("#efEnd");
const debutPInput = document.querySelector("#pHeureDebut");
const finPInput = document.querySelector("#pHeureFin");
const debutEtInput = document.querySelector("#etHeureDebut");
const finEtInput = document.querySelector("#etHeureFin");
const debutEfInput = document.querySelector("#efHeureDebut");
const finEfInput = document.querySelector("#efHeureFin");
const reelP = document.querySelector("#reelP");
const reelEt = document.querySelector("#reelEt");
const reelEf = document.querySelector("#reelEf");
const reelTotal = document.querySelector("#reelTotal");
let secondes = 0;
let timeout;
let time = "";
let totalTime = 0;
let limit = 0;
let hLimitB1 = 0;
let hLimitB2 = 0;
let hLimitH1 = 0;
let hLimitH2 = 0;
let estArrete = true;
let dateP = new Date(0, 0, 0);
let dateEt = new Date(0, 0, 0);
let dateEf = new Date(0, 0, 0);
let dateChrono = new Date(0, 0, 0);
export function demarrerP() {
    if (estArrete) {
        debutPInput.value = new Date().toLocaleTimeString('fr');
        startBtnP.disabled = true;
        stopBtnP.disabled = false;
        estArrete = false;
        limit = 60 * 35;
        defilerTemps();
    }
}
;
function arreterP() {
    if (!estArrete) {
        finPInput.value = new Date().toLocaleTimeString('fr');
        stopBtnP.disabled = true;
        startBtnEt.disabled = false;
        reelP.value = time;
        reelP.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2);
        totalTime += secondes;
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr');
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2);
        reset();
        clearTimeout(timeout);
    }
}
;
function demarrerEt() {
    if (estArrete) {
        debutEtInput.value = new Date().toLocaleTimeString('fr');
        startBtnEt.disabled = true;
        stopBtnEt.disabled = false;
        estArrete = false;
        limit = 60 * 40;
        defilerTemps();
    }
}
;
function arreterEt() {
    if (!estArrete) {
        finEtInput.value = new Date().toLocaleTimeString('fr');
        stopBtnEt.disabled = true;
        startBtnEf.disabled = false;
        reelEt.value = time;
        reelEt.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2);
        reelTotal.value += reelEt.value;
        totalTime += secondes;
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr');
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2);
        reset();
        clearTimeout(timeout);
    }
}
;
function demarrerEf() {
    if (estArrete) {
        debutEfInput.value = new Date().toLocaleTimeString('fr');
        startBtnEf.disabled = true;
        stopBtnEf.disabled = false;
        estArrete = false;
        limit = 60 * 15;
        defilerTemps();
    }
}
;
function arreterEf() {
    if (!estArrete) {
        finEfInput.value = new Date().toLocaleTimeString('fr');
        stopBtnEf.disabled = true;
        reelEf.value = time;
        reelEf.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2);
        totalTime += secondes;
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr');
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2);
        reset();
        clearTimeout(timeout);
    }
}
;
function defilerTemps() {
    if (estArrete)
        return;
    secondes++;
    hLimitB2 = limit / 1.1;
    hLimitB1 = limit / 1.05;
    hLimitH1 = limit * 1.05;
    hLimitH2 = limit * 1.1;
    time = new Date(0, 0, 0, 0, 0, secondes).toLocaleTimeString('fr');
    chrono.textContent = time;
    chrono.style.color = heureColor(secondes, limit, hLimitH2);
    timeout = setTimeout(defilerTemps, 1000);
}
;
function heureReelColor(seconds, hLimitH1, hLimitH2, hLimitB1, hLimitB2, range = 1) {
    return (seconds <= hLimitB2 / range || seconds >= hLimitH2 * range)
        ? "red"
        : (seconds <= hLimitB1 / range || seconds >= hLimitH1 * range)
            ? "orange"
            : "green";
}
function heureColor(seconds, limit, heureH, range = 1) {
    return (seconds < limit) ? "green" : (secondes >= heureH) ? "red" : "orange";
}
function reset() {
    chrono.textContent = "00:00:00";
    chrono.style.color = "green";
    secondes = 0;
    estArrete = true;
    clearTimeout(timeout);
}
;
