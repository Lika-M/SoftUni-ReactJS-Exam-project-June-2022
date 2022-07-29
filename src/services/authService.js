import { get, post } from './api.js';

const endpoints = {
    'register': '/users/register',
    'login': '/users/login',
    'logout': '/users/logout'
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password});
    const userData = {
        _id: result._id,
        email: result.email,
        password: result.password,
        token: result.accessToken
    }
    setUserData(userData);
    return result;
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    const userData = {
        _id: result._id,
        email: result.email,
        password: result.password,
        token: result.accessToken
    }
    setUserData(userData);
    return result;
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}

