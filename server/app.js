// core modules
const { join } = require('path');
// third party modules
const compression = require('compression');
const express = require('express');
// my modules
const { users, posts } = require('./routers');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(users);
// app.use(posts);

/*

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '../', 'public', '404.html'));
}); */
/*

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '../', 'public', '500.html'));
}); */

module.exports = app;
