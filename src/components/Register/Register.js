import {Link} from 'react-router-dom'
import './Register.css';

export default function Register() {

    return (
        <section id="register">
            <div className="container">
                <form id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <p>Email</p>
                    <input type="email" placeholder="Enter Email" name="email" required />

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required />
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