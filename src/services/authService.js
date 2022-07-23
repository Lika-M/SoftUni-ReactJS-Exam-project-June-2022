export async function login(email, password) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const result = await response.json();


    if (response.ok) {
        return result;
    } else {
        throw result.message;
    }
}

//Catch errors and show notification

export function logout() {
    localStorage.removeItem('email');
}

export function getUserData() {
    const email = localStorage.getItem('email');
    return email;
}

