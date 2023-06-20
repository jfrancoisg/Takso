export class Chrono {
    private startTime: number
    private running: boolean

    public constructor() {
        this.startTime = 0
        this.running = false
    }

    public start() {
        if (!this.running) {
            this.startTime = Date.now()
            this.running = true
            this.update()
        }
    }

    public stop() {
        if (this.running) {
            this.running = false
        }
    }

    private update() {
        if (this.running) {
            const currentTime = Date.now() - this.startTime
            const seconds = Math.floor(currentTime / 1000)
            const minutes = Math.floor(seconds / 60)

            // this.heure.innerHTML = `${minutes % 60}m ${seconds % 60}s`

            setTimeout(() => {
                this.update()
            }, 1000)
        }
    }
}