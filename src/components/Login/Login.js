import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService.js'

export default function Login({
    onLogin
}) {

    const navigate = useNavigate();

    function onLoginNav(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
        .then((userData) => {

            localStorage.setItem('email', email);
            onLogin(email);
            
            navigate('/');
        })
        .catch ( err => {
            //TODO notification
            console.log(err)
        })
           
      
  

    }
    return (

        <section id="login">
            <div className="container">
                <form id="login-form" onSubmit={onLoginNav} method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr />

                    <p>Email</p>
                    <input placeholder="Enter Email" name="email" type="email" />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />
                    <hr />

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