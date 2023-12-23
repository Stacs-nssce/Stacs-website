import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav>
            <div className="linksholder">
                <Link className="home" to="/">
                    <img src="./img/logo.svg" alt="stacs logo" />
                </Link>
                <ul className="nav-links">
                    <NavLink to="/Activities">Activities</NavLink>
                    <NavLink to="/Awards">Awards</NavLink>
                    <NavLink to="/Faculties">Faculty</NavLink>
                    <NavLink to="/Newsletter">Newsletter</NavLink>
                    <NavLink to="/Gallery">Gallery</NavLink>
                    <NavLink to="/Blog">Blog</NavLink>
                    <NavLink to="/Commitee">Commitee</NavLink>
                </ul>
                <div className="Hamburg" onClick={toggleMobileMenu}>
                    <img src="./img/menu.png" />
                </div>
            </div>
            {mobileMenuOpen ? (
                <ul className="m-nav-links">
                    <NavLink to="/Activities" onClick={toggleMobileMenu}>
                        Activities
                    </NavLink>
                    <NavLink to="/Awards" onClick={toggleMobileMenu}>
                        Awards
                    </NavLink>
                    <NavLink to="/Faculties" onClick={toggleMobileMenu}>
                        Faculty
                    </NavLink>
                    <NavLink to="/Newsletter" onClick={toggleMobileMenu}>
                        Newsletter
                    </NavLink>
                    <NavLink to="/Gallery" onClick={toggleMobileMenu}>
                        Gallery
                    </NavLink>
                    <NavLink to="/Blog" onClick={toggleMobileMenu}>
                        Blog
                    </NavLink>
                    <NavLink to="/Commitee" onClick={toggleMobileMenu}>
                        Commitee
                    </NavLink>
                </ul>
            ) : (
                <></>
            )}
        </nav>
    );
}
