import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header({
    user,
    isAuthenticated
}) {

    const userNav = (
        <div className="nav-user">
            <a>Welcome, {user}!</a>
            <NavLink to="/about">My Listings</NavLink>
            <NavLink to="/create">Create Listing</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    );

    const guestNav = (
        <div className="nav-guest">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">All Listings</NavLink>
                <NavLink to="javascript:void(0)">By Year</NavLink>
                {isAuthenticated
                    ? userNav
                    : guestNav}

            </nav>
        </header>
    );
}