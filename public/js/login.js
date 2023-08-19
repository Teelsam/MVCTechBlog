//login 

const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
            console.log(response);
        } else {
            alert('Account doesnt exist. Sign up first');
            
        }
    }
}
const login = document.querySelector('.login-form');
login.addEventListener('submit', loginForm);