import getPost from '../../../src/getPost';

describe('getPost', () => {
  it('get post 5', () => {
    getPost(5, (data) => {
      console.log('post5', data);
      expect(data).toMatchSnapshot();
    });
  });
});
