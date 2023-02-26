import { post } from './api.js';
import { setUserData, clearUserData } from './util.js';

const endpoints = {
    'register': '/users',
    'login': '/login',
    'logout': '/logout'
}

export async function register(username, email, password) {
    const result = await post(endpoints.register, { username, email, password });
    const userData = {
        _id: result.objectId,
        username,
        token: result.sessionToken
    };
    setUserData(userData);
    return userData;
}

export async function login(username, password) {
    const result = await post(endpoints.login, { username, password });
    const userData = {
        _id: result.objectId,
        username: result.username,
        token: result.sessionToken
    };
              
    setUserData(userData);
    return userData;
}

export async function logout() {
    post(endpoints.logout);
    clearUserData('userData');
}