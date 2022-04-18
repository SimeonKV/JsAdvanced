const registerForm = document.querySelector('form#register-form');
console.log(registerForm);
registerForm.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();
    let form = new FormData(e.currentTarget);

    const password = form.get('password');
    const repeatPass = form.get('rePass');

    if (password !== repeatPass) {
        console.error('Passwords do not match');
        return;
    }

    let newUser = {
        email: form.get('email'),
        password: password
    }

    try {
        const registerResponse = await fetch('http://localhost:3030/users/register', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if(registerResponse.status !== 200){
            const errorMessage = await registerResponse.json();
            throw new Error(errorMessage.message);
        }

        const registerResult = await registerResponse.json();

        console.log(registerResult);

        localStorage.setItem('token', registerResult.accessToken);
        localStorage.setItem('userId',registerResult._id);
        window.location.assign('./index.html');

    } catch (error) {
        alert(error.message);
    }
};