function sum(a, b = 0) {
  return parseInt(a, 10) + parseInt(b, 10);
}

describe('sum', () => {
  it('3+5 = 8', () => {
    expect(sum(3, 5)).toEqual(8);
  });
  it( '1+2 = 3', () => {
    // TODO: WRITE ME!
  });
  it('3 = 8', () => {
    expect(sum(3)).toEqual(3);
  });
  describe('with strings', () => {
    it('"0"+"0" = 0', () => {
      expect(sum('0', '0')).toEqual(0);
    });
    it('"2"+3 = 5', () => {
      expect(sum('2', 3)).toEqual(5);
    });
  });
});
