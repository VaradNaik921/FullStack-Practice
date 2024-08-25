document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});