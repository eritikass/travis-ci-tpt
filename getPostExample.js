const getPost = require('./src/getPost');

getPost(5, function (data) {
    console.log('post5', data);
});