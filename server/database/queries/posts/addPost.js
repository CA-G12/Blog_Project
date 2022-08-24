const connection = require('../../config/connection');

const addPostQuery = ({userId , text_content, time_stamp }) => {
    return connection.query('INSERT INTO posts (user_id , text_content, time_stamp) VALUES ($1 ,$2 ,$3) returning *', [userId, text_content,time_stamp]);
}

module.exports = addPostQuery;