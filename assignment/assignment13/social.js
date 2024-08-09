document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const userNameDisplay = document.getElementById('welcome-message');
    const postsContainer = document.getElementById('posts-container');
    const sidebar = document.getElementById('sidebar');
    const errorMessage = document.getElementById('error-message');
    const searchInput = document.getElementById('search');
    const profileIcon = document.getElementById('profile-icon');
    const profileMenu = document.getElementById('profile-menu');

    let loggedInUser = null;

    function toggleLoginState() {
        if (loggedInUser) {
            loginForm.classList.add('hidden');
            postsContainer.classList.remove('hidden');
            sidebar.classList.remove('hidden');
            searchInput.classList.add('visible');
            profileIcon.classList.add('visible');
            userNameDisplay.textContent = `Welcome, ${loggedInUser}!`;
            userNameDisplay.classList.remove('hidden');
            loadPosts();
        } else {
            loginForm.classList.remove('hidden');
            postsContainer.classList.add('hidden');
            sidebar.classList.add('hidden');
            searchInput.classList.remove('visible');
            profileIcon.classList.remove('visible');
            profileMenu.classList.add('hidden');
            userNameDisplay.classList.add('hidden');
            postsContainer.innerHTML = '';
        }
    }

    loginButton.addEventListener('click', function() {
        const email = document.getElementById('email-input').value.trim();
        const password = document.getElementById('password-input').value.trim();

        if (email === 'Admin@social' && password === 'password123') {
            loggedInUser = email.split('@')[0];
            toggleLoginState();
        } else {
            errorMessage.classList.remove('hidden');
        }
    });

    logoutButton.addEventListener('click', function() {
        loggedInUser = null;
        toggleLoginState();
    });

    profileIcon.addEventListener('click', function() {
        profileMenu.classList.toggle('hidden');
    });

    async function loadPosts() {
        try {
            const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await postsResponse.json();

            const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
            const comments = await commentsResponse.json();

            postsContainer.innerHTML = posts.map(post => {
                const postComments = comments.filter(comment => comment.postId === post.id);
                return `
                    <div class="post">
                        <div class="post-user">
                            <div class="post-user-icon"></div>
                            <div class="post-user-id">u/user${post.id}</div>
                        </div>
                        <div class="post-title">${post.title}</div>
                        <div class="post-body">${post.body}</div>
                        <div class="post-options">
                            <button class="like-button"><svg id="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg> Like</button>
                            <button class="share-button"><svg id="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg> Share</button>
                            <button class="save-button"><svg id="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg> Save</button>
                            <button class="comment-button"><svg id="a" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg> Comment</button>
                        </div>
                        <div class="comment-section">
                            ${postComments.map(comment => `
                                <div class="comment">
                                    <div class="comment-email">${comment.email}</div>
                                    <div class="comment-body">${comment.body}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');

            document.querySelectorAll('.comment-button').forEach(button => {
                button.addEventListener('click', function() {
                    const commentSection = this.parentElement.nextElementSibling;
                    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
                });
            });

        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    toggleLoginState();
});