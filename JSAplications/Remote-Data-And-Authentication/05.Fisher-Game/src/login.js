const loginForm = document.querySelector('#login-form');
console.log(loginForm);

loginForm.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get('password');

    const loginUser = {
        email: form.get('email'),
        password: password
    }

    try {
        const loginResponse = await fetch('http://localhost:3030/users/login', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        });

        if(loginResponse.status !== 200){
            const error = await loginResponse.json();
            throw new Error(error.message);
        }

        const loginResult = await loginResponse.json();
        console.log(loginResult);

        localStorage.setItem('token', loginResult.accessToken);
        localStorage.setItem('userId', loginResult._id);

        window.location.assign('./index.html');
    } catch (error){
        alert(error.message)
    }
}