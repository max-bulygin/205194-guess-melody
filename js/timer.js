const SECOND = 1000;

export default class Timer {
  set time(newTime) {
    if (newTime <= 0 || !Number.isInteger(newTime)) {
      throw new Error(`Parameter must be positive integer number`);
    }
    this._time = newTime;
  }

  get time() {
    return this._time;
  }

  tick() {
    if (this.time !== 0) {
      this.time--;
    }
    return this.time !== 0;
  }

  start() {
    this.interval = setInterval(() => {
      if (this.tick()) {
        this.onTick();
      } else {
        this.stop();
      }
    }, SECOND);
  }

  stop() {
    clearInterval(this.interval);
  }

  onTick() {

  }
}
