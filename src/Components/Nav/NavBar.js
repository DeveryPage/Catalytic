import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
        <ul className="navbar">
            <li id="Home" className="navbar__item">
                <Link className="navbar__link" to="/"> Home</Link>
            </li>
            {isAuthenticated && <li className="navbar__item">
                <Link className="navbar__link" to="/workoutPlans/create"> Create New Plan </Link>
            </li>}
            {isAuthenticated && <li className="navbar__item">
                    <Link className="navbar__link" to="/tips"> Tips </Link>
                </li>}

            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
    );
};