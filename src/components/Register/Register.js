
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

import './Register.css';

export default function Register() {

  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    passwords: '',
    match: ''
  });

  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
    repass: ''
  });

  const navigate = useNavigate();
  let errorMessage = '';

  function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    if (password !== repass) {
      errorMessage = 'Passwords don\'t match';
      setError(
        state => ({
          ...state,
          passwords: errorMessage
        }))

      setUserInput({
        username: '',
        email: '',
        password: '',
        repass: ''
      })
      return;
    }

    authService.register(username, email, password)
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
          username: '',
          email: '',
          password: '',
          repass: ''
        })
      })
  }

  function onChange(ev) {
    setUserInput(state => ({
      ...state,
      [ev.target.name]: ev.target.value
    }))
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validateUsername(ev) {
    if (ev.target.value.length > 10) {
      errorMessage = 'Username must be no longer than 10 symbols.';
    } else if (ev.target.value.length < 3) {
      errorMessage = 'Username must be at least 3 symbols.';
    }
    setError(state => ({
      ...state,
      username: errorMessage
    }))
  }

  function validateEmail(ev) {
    if (!isValidEmail(ev.target.value)) {
      errorMessage = 'Enter valid email.';
    }
    setError(state => ({
      ...state,
      email: errorMessage
    }))
  }

  function validatePassword(ev) {
    if (ev.target.value.length > 15) {
      errorMessage = 'Password must be no longer than 15 symbols.';
    } else if (ev.target.value.length < 5) {
      errorMessage = 'Password must be at least 5 symbols.';
    }
    setError(state => ({
      ...state,
      password: errorMessage
    }))
  }

  return (
    <section id="register">
      <div className="container">
        <form onSubmit={onRegister} id="register-form">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="username"
              name="username" required
              id="username"
              placeholder="Enter Username"
              value={userInput.username}
              onChange={onChange}
              onBlur={validateUsername}
            />
            {error.email
              ? <p style={{ color: 'red' }}>{error.username}</p>
              : null}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email"
              name="email" required
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
            <input type="password"
              name="password" required
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
          <div className="repass">
            <label htmlFor="repass">Repeat Password</label>
            <input type="password"
              placeholder="Repeat Password"
              name="repass" required
              id="repass"
              value={userInput.repass}
              onChange={onChange}
            />
            {error.passwords
              ? <p style={{ color: 'red' }}>{error.passwords}</p>
              : null}
          </div>
          <hr />
          {error.match
            ? <p style={{ color: 'red' }}>{error.match}</p>
            : null}
          <input type="submit" className="register-btn" value="Register" />
        </form>
        <div className="sign-in">
          <p>Already have an account?
            <Link to="/login">Sign in</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}