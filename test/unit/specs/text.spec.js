function text(t = '') {
  return t;
}

// test case1: returns same text as given in param
// test case2: if no text given, returns empty string
describe('text', () => {
  it('returns same text as given in param', () => {
    const t1 = text('kala');
    expect(t1).toBe('kala');
    expect(t1).toMatchSnapshot();
  });
  it('if no text given, returns empty string', () => {
    const t1 = text();
    expect(t1).toBe('');
  });

  it('if no text given, returns empty string', () => {
    const t1 = text();
    expect(t1).toBe('');
  });
});
