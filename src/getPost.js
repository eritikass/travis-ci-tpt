const axios = require('axios');

module.exports = function getPost(postId, callback) {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
