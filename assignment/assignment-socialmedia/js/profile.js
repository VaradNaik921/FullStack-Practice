document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.getElementById('profile-icon');
    const profileMenu = document.getElementById('profile-menu');
    const logoutButton = document.getElementById('logout-button');
    const feedButton = document.getElementById('profile-button');
    
    logoutButton.addEventListener('click', function() {
        alert('You have been logged out.');
        window.location.href = 'index.html';
    });
    
    profileIcon.addEventListener('click', function() {
        profileMenu.classList.toggle('hidden');
    });
    
    feedButton.addEventListener('click', function() {
        window.location.href = 'feed.html';
    });

    const postsContainer = document.getElementById('posts-container');
    const posts = [
        { id: 1, title: "Post 1", body: "This is the body of post 1", image: null },
        { id: 2, title: "Post 2", body: "This is the body of post 2", image: "path/to/image.jpg" }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
            ${post.image ? `<div class="post-image" style="background-image: url(${post.image});"></div>` : ''}
            <div class="post-options">
                <button class="like-btn">Like</button>
                <button class="comment-btn">Comment</button>
                <button class="share-btn">Share</button>
            </div>
            <div class="comment-section hidden">
                <div class="comment">
                    <div class="comment-email">comment@example.com</div>
                    <div class="comment-body">This is a comment.</div>
                </div>
            </div>
        `;
        
        postElement.querySelector('.comment-btn').addEventListener('click', () => {
            const commentSection = postElement.querySelector('.comment-section');
            commentSection.classList.toggle('hidden');
        });

        postsContainer.appendChild(postElement);
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            this.textContent = this.classList.contains('active') ? 'Liked' : 'Like';
        });
    });

    document.querySelectorAll('.share-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Post shared!');
        });
    });
});