import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext.js';
import './Header.css'

export default function Header() {

    const { user } = useContext(AuthContext);
    const auth = user.email?.split('@')[0];

    const userNav = (
        <div className="nav-user">
            <span  style={{backgroundColor: "#8cca60", color: "black"}}>Welcome, {auth}!</span>
            <NavLink to="/my-plants">My List</NavLink>
            <NavLink to="/create">Add Favorite</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    );

    const guestNav = (
        <div className="nav-guest">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Create Account</NavLink>
        </div>
    );

    return (
        <header>
            <nav className='nav-header'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                {user.email !== undefined
                    ? userNav
                    : guestNav}

            </nav>
        </header>
    );
}