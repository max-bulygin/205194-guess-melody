import assert from 'assert';
import timer from './timer.js';

describe(`Timer`, () => {
  it(`should accept only number as a parameter`, () => {
    assert.throws(() => timer(`sdf`));
    assert.throws(() => timer([]));
    assert.throws(() => timer({}));
    assert.doesNotThrow(() => timer(23));
  });
  it(`should decrease time by 1 on every tick`, () => {
    const myTimer = timer(60);
    myTimer.tick();
    assert.equal(59, myTimer.value);
  });
  it(`should not return negative values`, () => {
    const myTimer = timer(1);
    myTimer.tick();
    myTimer.tick();
    assert.notEqual(-1, myTimer.value);
  });
  it(`should return message when time is over`, () => {
    const myTimer = timer(1);
    myTimer.tick();
    assert.equal(`string`, typeof myTimer.value);
  });
});
