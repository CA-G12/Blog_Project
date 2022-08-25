const postsContanier = document.querySelector('.posts-container');

fetch('/posts').then(data=>data.text()).then((res) => {
  JSON.parse(res).forEach(element => {
    const post = document.createElement('div');
    post.className = 'post';

    const userName = document.createElement('div');
    userName.className = 'user-name';
    userName.textContent = element.username;

    const postText = document.createElement('div');
    postText.className = 'post-text';
    postText.textContent = element.text_content;

    const postTime = document.createElement('div');
    postTime.className = 'post-time';
    postTime.textContent = element.time_stamp.split('T')[0]; 

    post.appendChild(userName);
    post.appendChild(postText);
    post.appendChild(postTime);
    postsContanier.appendChild(post);
  });
}).catch(err => { console.log('error', err) });

