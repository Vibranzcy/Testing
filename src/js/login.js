```javascript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', handleLoginFormSubmit);
});

function handleLoginFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'loginSuccess') {
            window.location.href = '/';
        } else if (data.message === 'loginFailure') {
            displayLoginError(data.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function displayLoginError(error) {
    const errorElement = document.getElementById('loginError');
    errorElement.textContent = error;
    errorElement.style.display = 'block';
}
```