const express = require('express');

const router = express.Router();
const { setUser, getUser } = require('../controllers');

router.post('/users', setUser);

module.exports = router;
