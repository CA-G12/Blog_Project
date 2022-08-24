const connection = require('../../config/connection');

module.exports = (user) => {
  connection.query('INSERT INTO users(username  , password  , first_name , last_name ) VALUES (($1), ($2), ($3),($4)) RETURNING username;', [user.name, user.password, user.fname, user.lname])
    .then((username) => {
      console.log(username.rows);
    }).catch((err) => {
      console.log('Could not add user');
    });
};
