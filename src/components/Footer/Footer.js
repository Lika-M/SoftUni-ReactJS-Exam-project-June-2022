import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <p>Socials</p>
                <ul role="list">
                    <li><Link to=""><i className="fab fa-facebook-square"></i></Link></li>
                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            <p className="rights">&copy; All rights reserved 2022</p>
        </footer>
    );
}