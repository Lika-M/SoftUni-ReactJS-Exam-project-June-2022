import { get, post } from './api.js';

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout'
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password});
    const userData = {
        _id: result._id,
        email: result.email,
        token: result.accessToken
    };
    return userData;
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    const userData = {
        _id: result._id,
        email: result.email,
        token: result.accessToken
    };
    return userData;
}

export async function logout() {
    get(endpoints.logout);
}

