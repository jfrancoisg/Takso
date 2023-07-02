const chrono = <HTMLDivElement>document.querySelector("#chronometre")

const startBtnP = <HTMLButtonElement>document.querySelector("#pStart")
const stopBtnP = <HTMLButtonElement>document.querySelector("#pEnd")

const startBtnEt = <HTMLButtonElement>document.querySelector("#etStart")
const stopBtnEt = <HTMLButtonElement>document.querySelector("#etEnd")

const startBtnEf = <HTMLButtonElement>document.querySelector("#efStart")
const stopBtnEf = <HTMLButtonElement>document.querySelector("#efEnd")

const debutPInput = <HTMLInputElement>document.querySelector("#pHeureDebut")
const finPInput = <HTMLInputElement>document.querySelector("#pHeureFin")

const debutEtInput = <HTMLInputElement>document.querySelector("#etHeureDebut")
const finEtInput = <HTMLInputElement>document.querySelector("#etHeureFin")

const debutEfInput = <HTMLInputElement>document.querySelector("#efHeureDebut")
const finEfInput = <HTMLInputElement>document.querySelector("#efHeureFin")

const reelP = <HTMLInputElement>document.querySelector("#reelP")
const reelEt = <HTMLInputElement>document.querySelector("#reelEt")
const reelEf = <HTMLInputElement>document.querySelector("#reelEf")

const reelTotal = <HTMLInputElement>document.querySelector("#reelTotal")

let secondes = 0

let timeout = 0
let time = ""
let totalTime = 0

let limit = 0
let hLimitB1 = 0
let hLimitB2 = 0
let hLimitH1 = 0
let hLimitH2 = 0

let estArrete = true

let dateP = new Date(0, 0, 0)
let dateEt = new Date(0, 0, 0)
let dateEf = new Date(0, 0, 0)
let dateChrono = new Date(0, 0, 0)

function demarrerP() {
    if (estArrete) {
        debutPInput.value = new Date().toLocaleTimeString('fr')
        startBtnP.disabled = true
        stopBtnP.disabled = false
        estArrete = false
        limit = 60 * 35
        defilerTemps()
    }
};

function arreterP() {
    if (!estArrete) {
        finPInput.value = new Date().toLocaleTimeString('fr')
        stopBtnP.disabled = true
        startBtnEt.disabled = false
        reelP.value = time
        reelP.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2)
        totalTime += secondes
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr')
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2)
        reset()
        clearTimeout(timeout)
    }
};

function demarrerEt() {
    if (estArrete) {
        debutEtInput.value = new Date().toLocaleTimeString('fr')
        startBtnEt.disabled = true
        stopBtnEt.disabled = false
        estArrete = false
        limit = 60 * 40
        defilerTemps()
    }
};

function arreterEt() {
    if (!estArrete) {
        finEtInput.value = new Date().toLocaleTimeString('fr')
        stopBtnEt.disabled = true
        startBtnEf.disabled = false
        reelEt.value = time
        reelEt.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2)
        reelTotal.value += reelEt.value
        totalTime += secondes
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr')
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2)
        reset()
        clearTimeout(timeout)
    }
};

function demarrerEf() {
    if (estArrete) {
        debutEfInput.value = new Date().toLocaleTimeString('fr')
        startBtnEf.disabled = true
        stopBtnEf.disabled = false
        estArrete = false
        limit = 60 * 15
        defilerTemps()
    }
};

function arreterEf() {
    if (!estArrete) {
        finEfInput.value = new Date().toLocaleTimeString('fr')
        stopBtnEf.disabled = true
        reelEf.value = time
        reelEf.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2)
        totalTime += secondes
        reelTotal.value = new Date(0, 0, 0, 0, 0, totalTime).toLocaleTimeString('fr')
        reelTotal.style.color = heureReelColor(secondes, hLimitH1, hLimitH2, hLimitB1, hLimitB2, 1.2)
        reset()
        clearTimeout(timeout)
    }
};

function defilerTemps() {
    if (estArrete) return

    secondes++

    hLimitB2 = limit / 1.1
    hLimitB1 = limit / 1.05

    hLimitH1 = limit * 1.05
    hLimitH2 = limit * 1.1

    time = new Date(0, 0, 0, 0, 0, secondes).toLocaleTimeString('fr')
    chrono.textContent = time
    chrono.style.color = heureColor(secondes, limit, hLimitH2)

    timeout = setTimeout(defilerTemps, 1)
};

function heureReelColor(seconds: number, hLimitH1: number, hLimitH2: number, hLimitB1: number, hLimitB2: number, range: number = 1) {
    return (seconds <= hLimitB2 / range || seconds >= hLimitH2 * range)
        ? "red"
        : (seconds <= hLimitB1 / range || seconds >= hLimitH1 * range)
            ? "orange"
            : "green"
}

function heureColor(seconds: number, limit: number, heureH: number, range: number = 1) {
    return (seconds < limit) ? "green" : (secondes >= heureH) ? "red" : "orange"
}

function reset() {
    chrono.textContent = "00:00:00"
    chrono.style.color = "green"
    secondes = 0
    estArrete = true
    clearTimeout(timeout)
};
