export function login(email, password) {


    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())

}

export function getUserData() {
    const email = localStorage.getItem('email');
    return email;
}

export function isAuthenticated() {
    return Boolean(getUserData());
}