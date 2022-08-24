const { addPostQuery  } = require('../../database/queries');

const addPost = (req, res) => {
  const {userId} = req.params;
  const  {text_content, time_stamp} = req.body;
  
  addPostQuery({userId, text_content, time_stamp})
    .then((posts) => {
      console.log(posts.rows);
      res.redirect(`/users/${userId}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
}

module.exports = addPost;