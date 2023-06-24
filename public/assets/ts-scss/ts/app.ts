let chrono = <HTMLDivElement>document.querySelector("#chronometre")

let startBtnP = <HTMLButtonElement>document.querySelector("#pStart")
let stopBtnP = <HTMLButtonElement>document.querySelector("#pEnd")

let startBtnEt = <HTMLButtonElement>document.querySelector("#etStart")
let stopBtnEt = <HTMLButtonElement>document.querySelector("#etEnd")

let startBtnEf = <HTMLButtonElement>document.querySelector("#efStart")
let stopBtnEf = <HTMLButtonElement>document.querySelector("#efEnd")

let debutPInput = <HTMLInputElement>document.querySelector("#pHeureDebut")
let finPInput = <HTMLInputElement>document.querySelector("#pHeureFin")

let debutEtInput = <HTMLInputElement>document.querySelector("#etHeureDebut")
let finEtInput = <HTMLInputElement>document.querySelector("#etHeureFin")

let debutEfInput = <HTMLInputElement>document.querySelector("#efHeureDebut")
let finEfInput = <HTMLInputElement>document.querySelector("#efHeureFin")

let reelP = <HTMLInputElement>document.querySelector("#reelP")
let reelEt = <HTMLInputElement>document.querySelector("#reelEt")
let reelEf = <HTMLInputElement>document.querySelector("#reelEf")

let heures = 0
let minutes = 0
let secondes = 0

let h = ""
let min = ""
let sec = ""

let timeout = 0
let time = ""

let limit = 0
let hLimit = 0

let estArrete = true

stopBtnP.disabled = true

startBtnEt.disabled = true
stopBtnEt.disabled = true

startBtnEf.disabled = true
stopBtnEf.disabled = true

function demarrerP() {
    if (estArrete) {
        debutPInput.value = heure()
        startBtnP.disabled = true
        stopBtnP.disabled = false
        estArrete = false
        limit = 35
        defilerTemps()
    }
};

function arreterP() {
    if (!estArrete) {
        finPInput.value = heure()
        stopBtnP.disabled = true
        startBtnEt.disabled = false
        chrono.style.color = "green"
        reelP.value = "" + time
        reelP.style.color = heureColor(minutes, limit, hLimit)
        reset()
        clearTimeout(timeout)
    }
};

function demarrerEt() {
    if (estArrete) {
        debutEtInput.value = heure()
        startBtnEt.disabled = true
        stopBtnEt.disabled = false
        estArrete = false
        limit = 40
        defilerTemps()
    }
};

function arreterEt() {
    if (!estArrete) {
        finEtInput.value = heure()
        stopBtnEt.disabled = true
        startBtnEf.disabled = false
        chrono.style.color = "green"
        reelEt.value = "" + time
        reelEt.style.color = heureColor(minutes, limit, hLimit)
        reset()
        clearTimeout(timeout)
    }
};

function demarrerEf() {
    if (estArrete) {
        debutEfInput.value = heure()
        startBtnEf.disabled = true
        stopBtnEf.disabled = false
        estArrete = false
        limit = 15
        defilerTemps()
    }
};

function arreterEf() {
    if (!estArrete) {
        finEfInput.value = heure()
        stopBtnEf.disabled = true
        chrono.style.color = "green"
        reelEf.value = "" + time
        reelEf.style.color = heureColor(minutes, limit, hLimit)
        reset()
        clearTimeout(timeout)
    }
};

function defilerTemps() {
    if (estArrete) return

    secondes++

    if (secondes == 60) {
        minutes++
        secondes = 0
    }

    if (minutes == 60) {
        heures++
        minutes = 0
    }

    sec = (secondes < 10) ? "0" + secondes : "" + secondes
    min = (minutes < 10) ? "0" + minutes : "" + minutes
    h = (heures < 10) ? "0" + heures : "" + heures

    hLimit = Math.ceil(limit * 1.05)

    // console.log(hLimit, limit)

    chrono.style.color = heureColor(minutes, limit, hLimit)
    // (minutes < limit) ? "green" : (minutes >= hLimit) ? "red" : "orange"

    time = `${h}:${min}:${sec}`
    chrono.textContent = `${h}:${min}:${sec}`

    timeout = setTimeout(defilerTemps, 1000)
};

function heureColor(m: number, l: number, hL: number) {
    return (m < l) ? "green" : (m >= hL) ? "red" : "orange"
}

function reset() {
    chrono.textContent = "00:00:00"
    estArrete = true
    heures = 0
    minutes = 0
    secondes = 0
    clearTimeout(timeout)
};

function heure() {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}