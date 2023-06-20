export class Chrono {
    startTime;
    running;
    constructor() {
        this.startTime = 0;
        this.running = false;
    }
    start() {
        if (!this.running) {
            this.startTime = Date.now();
            this.running = true;
            this.update();
        }
    }
    stop() {
        if (this.running) {
            this.running = false;
        }
    }
    update() {
        if (this.running) {
            const currentTime = Date.now() - this.startTime;
            const seconds = Math.floor(currentTime / 1000);
            const minutes = Math.floor(seconds / 60);
            // this.heure.innerHTML = `${minutes % 60}m ${seconds % 60}s`
            setTimeout(() => {
                this.update();
            }, 1000);
        }
    }
}
