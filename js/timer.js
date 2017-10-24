const timer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Parameter must be a number`);
  }
  const message = `Time's up!`;
  return {
    value: time,
    tick() {
      this.value--;
      if (this.value === 0 || typeof this.value !== `number`) {
        this.value = message;
      }
    }
  };
};

export default timer;
