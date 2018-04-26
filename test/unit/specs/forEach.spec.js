function double(num) {
  if (num === undefined) {
    throw new Error('no input given!');
  }
  if (isNaN(num)) {
    throw new Error('input need to be number!');
  }
  return num * 2;
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index], double(items[index]), index);
  }
}

describe('forEach', () => {
  it('returns same text as given in param', () => {
    const mockCallback = jest.fn();

    const params = [1, 2, 3];
    forEach(params, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(params.length);

    console.log(mockCallback.mock.calls);

    expect(mockCallback.mock.calls[2][0]).toBe(3);
    expect(mockCallback.mock.calls[2][1]).toBe(6);

    params.forEach((value, index) => {
      expect(mockCallback.mock.calls[index][0]).toBe(value);
      expect(mockCallback.mock.calls[index][1]).toBe(value * 2);
    });

    expect(mockCallback.mock.calls).toMatchSnapshot();

    mockCallback('kala', 1245);

    console.log(mockCallback.mock.calls);
  });
});
