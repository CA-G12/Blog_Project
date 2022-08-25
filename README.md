# BLOG App

A web application that provides simple blog platform.


##  Live link

You can check the live version out from [HERE](#).

##  User journey

- When the user opens our application, the first thing he will see is a form through which he can sign in to his account.

- If the user doesn't have an account he will be able easily move to sign up page.

- In sign up, the user will be asked to provide his/her name username password.

- Then the user will click on the sign-in/sign-up button that will take his/her to the user's home page.

- The user will be able to see the group of posts and will be able to add new post.


##  User stories

- As a user, I should be able to sing-in into my account.
- As a user, If I don't have an account I should be able to create a new one. 
- As a user, I should be able to move to posts' home page using my username and password.
- As a user, After completing the sign-in process, I should be able to see posts.
- As a user, I should be able to add a new post.

##  How to install the project on the local machine

- You can click the _code_ drop-down menu as illustrated in the picture above and copy the link to clone the repo.
- Now go to your terminal and type: `git clone <the link here>` and then the repo will be cloned to your local machine.
- By now you have to open your IDE -I recommend VSCode- and open the project.
- Now you need to run the command `npm install` to install all the dependencies.
- After that you should setting up the database follow the steps :

    1.  Connect to postgres, by typing `psql` or `pgcli` in the terminal.
    2.  use these commands to create your database
        ```
        CREATE DATABASE db_name;
        CREATE USER user_name WITH SUPERUSER PASSWORD 'password';
        ALTER DATABASE db_name OWNER TO user_name;
        ```
    3.  Add a `.env` file and add the database's url in this format: `DB_URL = postgres://[username]:[password]@localhost:5432/[database]`.
    4. Copy build.sql path ```.../server/database/config/build.sql``` and run this command in terminal ```\i [build.sql path]```.
- to open a live page from your local machine project, you can run the `npm start` command which will open a live hot server to work with.
- Happy Coding!

##  Technologies that I used

- -> HTML5.
- -> CSS3.
- -> JavaScript.
- -> Nodejs.
- -> Express.
- -> PLpgSQL.
- -> NPM.
- -> Git & GitHub.


## Team members:

- _[Sami Ba‘alousha](https://github.com/sam96B)_
- _[Mai Mohammed](https://github.com/mai-mohammed)_
