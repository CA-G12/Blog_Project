const connection = require('../../config/connection');

const getPostsQuery = () => connection
.query('SELECT posts.id,  posts.text_content , posts.time_stamp, users.username FROM users JOIN posts ON posts.user_id =users.id')

module.exports = getPostsQuery;