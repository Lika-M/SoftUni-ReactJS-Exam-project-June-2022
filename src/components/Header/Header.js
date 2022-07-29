import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext.js';
import './Header.css'

export default function Header() {

    const { user } = useContext(AuthContext);

    const userNav = (
        <div className="nav-user">
            <a>Welcome, {user.email}!</a>
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
                {user.email !== ''
                    ? userNav
                    : guestNav}

            </nav>
        </header>
    );
}