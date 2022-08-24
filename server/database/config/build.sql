BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(15)

);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  text_content TEXT NOT NULL,
  time_stamp timestamp
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ,
  user_id INTEGER REFERENCES users(id) ,
  text_content TEXT NOT NULL
);

INSERT INTO users (username,password,first_name, last_name) VALUES
  ('Sery1976', 'adgafdg28', 'Alisha', 'Clayton'),
  ('Notne1991', '36dfgjdf', 'Chelsea', 'Cross'),
  ('Moull1990', '41sdfhsd', 'Skye', 'Hobbs'),
  ('Spont1935', '72dshgfj', 'Matthew', 'Griffin')
;

INSERT INTO posts ( user_id,text_content,time_stamp) VALUES
  (1,'Announcing of invitation principles in. Cold in late or deal.','2004-10-19 10:23:54'),
  (1,'Peculiar trifling absolute and wandered vicinity property yet.','2020-10-19 10:23:54'),
  (2,'Far stairs now coming bed oppose hunted become his.','2015-10-19 10:23:54')
;

INSERT INTO comments (post_id, user_id, text_content) VALUES
  (3, 2, 'Great blog post!')
;
select * from posts;
select * from users;
select * from comments;

COMMIT;