const users = require('./users');
// const posts = require('./posts');
const {getPosts, addPost} = require('../controllers');
const router = require('express').Router();

router.get('/posts', getPosts);
router.post('/posts/:userId', addPost);

// main endpoints

module.exports = { users, router };
// module.exports = router;
