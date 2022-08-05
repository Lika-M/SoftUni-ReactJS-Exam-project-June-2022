import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="socials">
                <ul role="list">
                    <li><span><i className="fab fa-facebook-square"></i></span></li>
                    <li><span><i className="fab fa-twitter"></i></span></li>
                    <li><span><i className="fab fa-linkedin"></i></span></li>
                </ul>
            </div>
            <p className="rights">&copy; designed by Lika-M 2022</p>
        </footer>
    );
}