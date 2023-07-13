// export class Chrono {
//     private readonly chrono = <HTMLDivElement>document.querySelector("#chronometre")

//     private readonly startBtnP = <HTMLButtonElement>document.querySelector("#pStart")
//     private readonly stopBtnP = <HTMLButtonElement>document.querySelector("#pEnd")

//     private readonly startBtnEt = <HTMLButtonElement>document.querySelector("#etStart")
//     private readonly stopBtnEt = <HTMLButtonElement>document.querySelector("#etEnd")

//     private readonly startBtnEf = <HTMLButtonElement>document.querySelector("#efStart")
//     private readonly stopBtnEf = <HTMLButtonElement>document.querySelector("#efEnd")

//     private readonly debutPInput = <HTMLInputElement>document.querySelector("#pHeureDebut")
//     private readonly finPInput = <HTMLInputElement>document.querySelector("#pHeureFin")

//     private readonly debutEtInput = <HTMLInputElement>document.querySelector("#etHeureDebut")
//     private readonly finEtInput = <HTMLInputElement>document.querySelector("#etHeureFin")

//     private readonly debutEfInput = <HTMLInputElement>document.querySelector("#efHeureDebut")
//     private readonly finEfInput = <HTMLInputElement>document.querySelector("#efHeureFin")

//     private readonly reelP = <HTMLInputElement>document.querySelector("#reelP")
//     private readonly reelEt = <HTMLInputElement>document.querySelector("#reelEt")
//     private readonly reelEf = <HTMLInputElement>document.querySelector("#reelEf")

//     private reelTotal = <HTMLInputElement>document.querySelector("#reelTotal")

//     private secondes: number = 0

//     private timeout: number = 0
//     private time = ""
//     private totalTime: number = 0

//     private limit: number = 0
//     private hLimitB1: number = 0
//     private hLimitB2: number = 0
//     private hLimitH1: number = 0
//     private hLimitH2: number = 0

//     private estArrete: boolean = true

//     private dateP = new Date(0, 0, 0)
//     private dateEt = new Date(0, 0, 0)
//     private dateEf = new Date(0, 0, 0)
//     private dateChrono = new Date(0, 0, 0)

//     public defilerTemps() {
//         if (this.estArrete) return

//         this.secondes++

//         this.hLimitB2 = this.limit / 1.1
//         this.hLimitB1 = this.limit / 1.05

//         this.hLimitH1 = this.limit * 1.05
//         this.hLimitH2 = this.limit * 1.1

//         this.time = new Date(0, 0, 0, 0, 0, this.secondes).toLocaleTimeString('fr')
//         this.chrono.textContent = this.time
//         this.chrono.style.color = this.heureColor(this.secondes, this.limit, this.hLimitH2)

//         console.log(setTimeout(this.defilerTemps, 1000))
//     };

//     public demarrerP() {
//         if (this.estArrete) {
//             this.debutPInput.value = new Date().toLocaleTimeString('fr')
//             this.startBtnP.disabled = true
//             this.stopBtnP.disabled = false
//             this.estArrete = false
//             this.limit = 60 * 35
//             this.defilerTemps()
//         }
//     };

//     public arreterP() {
//         if (!this.estArrete) {
//             this.finPInput.value = new Date().toLocaleTimeString('fr')
//             this.stopBtnP.disabled = true
//             this.startBtnEt.disabled = false
//             this.reelP.value = this.time
//             this.reelP.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2)
//             this.totalTime += this.secondes
//             this.reelTotal.value = new Date(0, 0, 0, 0, 0, this.totalTime).toLocaleTimeString('fr')
//             this.reelTotal.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2, 1.2)
//             this.reset()
//             clearTimeout(this.timeout)
//         }
//     };

//     public demarrerEt() {
//         if (this.estArrete) {
//             this.debutEtInput.value = new Date().toLocaleTimeString('fr')
//             this.startBtnEt.disabled = true
//             this.stopBtnEt.disabled = false
//             this.estArrete = false
//             this.limit = 60 * 40
//             this.defilerTemps()
//         }
//     };

//     public arreterEt() {
//         if (!this.estArrete) {
//             this.finEtInput.value = new Date().toLocaleTimeString('fr')
//             this.stopBtnEt.disabled = true
//             this.startBtnEf.disabled = false
//             this.reelEt.value = this.time
//             this.reelEt.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2)
//             this.reelTotal.value += this.reelEt.value
//             this.totalTime += this.secondes
//             this.reelTotal.value = new Date(0, 0, 0, 0, 0, this.totalTime).toLocaleTimeString('fr')
//             this.reelTotal.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2, 1.2)
//             this.reset()
//             clearTimeout(this.timeout)
//         }
//     };

//     public demarrerEf() {
//         if (this.estArrete) {
//             this.debutEfInput.value = new Date().toLocaleTimeString('fr')
//             this.startBtnEf.disabled = true
//             this.stopBtnEf.disabled = false
//             this.estArrete = false
//             this.limit = 60 * 15
//             this.defilerTemps()
//         }
//     };

//     public arreterEf() {
//         if (!this.estArrete) {
//             this.finEfInput.value = new Date().toLocaleTimeString('fr')
//             this.stopBtnEf.disabled = true
//             this.reelEf.value = this.time
//             this.reelEf.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2)
//             this.totalTime += this.secondes
//             this.reelTotal.value = new Date(0, 0, 0, 0, 0, this.totalTime).toLocaleTimeString('fr')
//             this.reelTotal.style.color = this.heureReelColor(this.secondes, this.hLimitH1, this.hLimitH2, this.hLimitB1, this.hLimitB2, 1.2)
//             this.reset()
//             clearTimeout(this.timeout)
//         }
//     };

//     public reset() {
//         this.chrono.textContent = "00:00:00"
//         this.chrono.style.color = "green"
//         this.secondes = 0
//         this.estArrete = true
//         clearTimeout(this.timeout)
//     };

//     private heureReelColor(seconds: number, hLimitH1: number, hLimitH2: number, hLimitB1: number, hLimitB2: number, range: number = 1) {
//         return (seconds <= hLimitB2 / range || seconds >= hLimitH2 * range)
//             ? "red"
//             : (seconds <= hLimitB1 / range || seconds >= hLimitH1 * range)
//                 ? "orange"
//                 : "green"
//     }

//     private heureColor(seconds: number, limit: number, heureH: number) {
//         return (seconds < limit) ? "green" : (this.secondes >= heureH) ? "red" : "orange"
//     }
// }