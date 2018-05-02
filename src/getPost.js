const axios = require('axios');

module.exports = function getPost(postId, callback) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  axios.get(url, {
    // eslint-disable-next-line
    adapter: require('axios/lib/adapters/http'),
  })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
