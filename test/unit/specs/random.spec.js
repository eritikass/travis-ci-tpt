import random from '../../../src/random';

describe('random', () => {
  it('gives number', () => {
    const number = random();
    expect(number).toBeNumber();
  });
  it('gives number between 0 ... 6', () => {
    const number = random(6);
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(6);
  });
});
