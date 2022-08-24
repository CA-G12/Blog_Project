const { setUser } = require('../database/queries');

module.exports = (req, res) => {
  console.log(req.body);
  const user = {
    name: 'mohaa96b',
    password: '12385',
    fname: 'sami',
    lname: 'baalousha',
  };
  setUser(user);
};
