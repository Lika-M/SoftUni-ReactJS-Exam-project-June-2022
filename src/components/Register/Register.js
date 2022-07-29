
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';

import './Register.css';

export default function Register() {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState({
    email: '',
    password: '',
    repass: '',
    match: ''
  });
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    repass: ''
  });

  const navigate = useNavigate();
 
  let errorMessage = '';
  let passwordMatch = false;

  function onRegisterNav(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');
    if (password === repass) passwordMatch = true;

    authService.login(email, password)
      .then((userData) => {
        console.log(userData)

        userLogin(userData);
        navigate('/');
      })
      .catch(err => {
        setError(state => ({
          ...state,
          match: err
        }))
        //TODO notation
        alert(err);
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
  }

  function validateEmail(ev) {
    if (!isValidEmail(ev.target.value)) {
      errorMessage = 'Enter valid email.'
    }
    setError(state => ({
      ...state,
      email: errorMessage
    }))
  }

  function validatePassword(ev) {
    if (ev.target.value.length > 15) {
      errorMessage = 'Password must be no longer than 15 symbols.'
    } else if (ev.target.value.length < 5) {
      errorMessage = 'Password must be at least 5 symbols.'
    }
    setError(state => ({
      ...state,
      password: errorMessage
    }))
  }

  //Need to handle server Error
  // function validateMatch() {
  //   if (password !== repass) {
  //     errorMessage = 'passwords don\'t match'
  //   }
  //   setError(state => ({
  //     ...state,
  //     repass: errorMessage
  //   }))
  // }

  return (
    <section id="register">
      <div className="container">
        <form onSubmit={onRegisterNav} id="register-form">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
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
              // value={userInput.repass}
              // onChange={onChange}
              // onBlur={validateMatch}
            />
            {/* {error.repass
              ? <p style={{ color: 'red' }}>{error.repass}</p>
              : null} */}
          </div>
          <hr />

          <input type="submit" className="register-btn" value="Register" />
        </form>
        <div className="sign-in">
          <p>Already have an account?
            <Link to="/login">Sign in</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}