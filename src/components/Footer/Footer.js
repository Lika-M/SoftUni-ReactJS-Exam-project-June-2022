import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <p>Socials</p>
                <ul role="list">
                    <li><Link to="javascript:void(0)"><i className="fab fa-facebook-square"></i></Link></li>
                    <li><Link to="javascript:void(0)"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="javascript:void(0)"><i className="fab fa-linkedin"></i></Link></li>
                </ul>
            </div>
            <p className="rights">Copyright &copy; designed by Lika-M 2022</p>
        </footer>
    );
}