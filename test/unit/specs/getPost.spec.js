import getPost from '../../../src/getPost';

describe('getPost', () => {
  it('get post 5', (done) => {
    getPost(5, (data) => {
      console.log('post5', data);
      expect(data).toMatchSnapshot();
      done();
    });
  });

  it('get post 7', (done) => {
    getPost(7, (data) => {
      console.log('post7', data);
      expect(data).toMatchSnapshot();
      done();
    });
  });
});
