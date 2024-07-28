document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn) {
        document.getElementById('log').classList.add('hide');
        document.getElementById('con').classList.remove('hide');
        document.getElementById('out').classList.remove('hide');
        loadData();
        inactivityTimer();
    } else {
        document.getElementById('log').classList.remove('hide');
        document.getElementById('con').classList.add('hide');
        document.getElementById('out').classList.add('hide');
    }
});

//Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (email === 'Admin@bank' && password === 'password123') {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('log').classList.add('hide');
        document.getElementById('con').classList.remove('hide');
        document.getElementById('out').classList.remove('hide');
        errorMessage.classList.add('hide');
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        inactivityTimer();
    } else {
        errorMessage.classList.remove('hide');
    }
});

//Logout by button
document.getElementById('out').addEventListener('click', function() {
    document.getElementById('log').classList.remove('hide');
    document.getElementById('con').classList.add('hide');
    document.getElementById('out').classList.add('hide');
    localStorage.setItem('loggedIn', 'false');
    stopInactivityTimer();
});

//Logout by inactivity timer
let Time;
function logout() {
    alert("You are now logged out due to inactivity.");
    document.getElementById('log').classList.remove('hide');
    document.getElementById('con').classList.add('hide');
    document.getElementById('out').classList.add('hide');
    localStorage.setItem('loggedIn', 'false');
    stopInactivityTimer();
}

function inactivityTimer() {
    resetTimer();
    document.addEventListener('click', resetTimer);
    document.addEventListener('scroll', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('keyup', resetTimer);
}

function stopInactivityTimer() {
    clearTimeout(Time);
    document.removeEventListener('click', resetTimer);
    document.removeEventListener('scroll', resetTimer);
    document.removeEventListener('keydown', resetTimer);
    document.removeEventListener('keyup', resetTimer);
}

function resetTimer() {
    clearTimeout(Time);
    Time = setTimeout(logout, 60000);
}