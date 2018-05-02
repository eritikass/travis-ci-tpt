import random from '../../../src/random';

jest.mock('../../../src/random');

random.mockImplementation(() => 100);

function incrementByRandom(input) {
  return input + random();
}

describe('incrementByRandom', () => {
  it('5 + random => 105', () => {
    const number = incrementByRandom(5);
    expect(number).toBe(105);
  });

  it('13 + random => 113', () => {
    const number = incrementByRandom(13);
    expect(number).toBe(113);
  });

  it('7 + random = 107', (  ) => {
    // TODO: write me!
  });
});

