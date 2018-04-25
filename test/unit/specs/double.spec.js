function double(num) {
  return num * 2;
}

// write 2 test cases that are testing success .toBe
// and one that i testing .not.toBe

describe('double', () => {
  it('double 3 to be 6', () => {
    expect(double(3)).toEqual(6);
  });
  it('double 0 to be 0', () => {
    expect(double(0)).toEqual(0);
  });
  it('double "5" to be 0', () => {
    expect(double('5')).toEqual(10);
  });
  it('double "kala" do be not a number', () => {
    expect(double('kala')).not.toBeNumber();
  });
});
