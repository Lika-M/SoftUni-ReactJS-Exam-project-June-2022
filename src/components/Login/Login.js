import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';


export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState({
        email: '',
        password: '',
        match: ''
    });
    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    });
    let errorMessage = '';
    const navigate = useNavigate();

    const onLogin = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((userData) => {
                userLogin(userData);
                navigate('/');
            })
            .catch(err => {
                setError(state => ({
                    ...state,
                    match: err.message
                }))
                setUserInput({
                    email: '',
                    password: ''
                })
            })
    }

    function onChange(ev) {
        setUserInput(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    };

    function validateEmail(ev) {

        if (!isValidEmail(ev.target.value)) {
            errorMessage = 'Enter valid email.'
        }
        setError(state => ({
            ...state,
            email: errorMessage
        }));
    };

    function validatePassword(ev) {
        if (ev.target.value.length > 15) {
            errorMessage = 'Password must be no longer than 15 symbols.'
        } else if (ev.target.value.length < 5) {
            errorMessage = 'Password must be at least 5 symbols.'
        }

        setError(state => ({
            ...state,
            password: errorMessage
        }));
    };

    return (

        <section id="login">
            <div className="container">
                <form id="login-form" onSubmit={onLogin} method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr />
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={userInput.email}
                            onChange={onChange}
                            onBlur={validateEmail}
                        />
                        {error.email
                            ? <p style={{ color: 'red' }}>{error.email}</p>
                            : null}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={userInput.password}
                            onChange={onChange}
                            onBlur={validatePassword}
                        />
                        {error.password
                            ? <p style={{ color: 'red' }}>{error.password}</p>
                            : null}
                    </div>
                    <hr />
                    {error.match
                            ? <p style={{ color: 'red' }}>{error.match}</p>
                            : null}
                    <input type="submit" className="register-btn" value="Login" />
                </form>
                <div className="sign-in">
                    <p>Don't have an account?
                        <Link to="/register">Sign up</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
} 