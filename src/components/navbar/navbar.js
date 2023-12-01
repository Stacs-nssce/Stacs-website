import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="logo flex-container">
                    <Link className="home" to="/">
                        <img src="./img/logo.svg" alt="stacs logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <NavLink to="/Faculties">Faculties</NavLink>
                    <NavLink to="/Activities">Activities</NavLink>
                    <NavLink to="/Awards">Awards</NavLink>
                    <NavLink to="/Newsletter">Newsletter</NavLink>
                    <NavLink to="/Gallery">Gallery</NavLink>
                    <NavLink to="/Blog">Blog</NavLink>
                    <NavLink to="/Commitee">Commitee</NavLink>
                </ul>
            </nav>
        </>
    );
}
