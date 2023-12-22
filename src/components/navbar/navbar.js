import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav>
                <Link className="home" to="/">
                    <img src="./img/logo.svg" alt="stacs logo" />
                </Link>
                {/* <div
                    className={`menu ${mobileMenuOpen ? "open" : ""}`}
                    onClick={toggleMobileMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div> */}
                <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
                    <NavLink to="/Faculties" onClick={toggleMobileMenu}>
                        Faculties
                    </NavLink>
                    <NavLink to="/Activities" onClick={toggleMobileMenu}>
                        Activities
                    </NavLink>
                    <NavLink to="/Awards" onClick={toggleMobileMenu}>
                        Awards
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
            </nav>
            {/* <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
                <NavLink to="/Faculties" onClick={toggleMobileMenu}>
                    Faculties
                </NavLink>
                <NavLink to="/Activities" onClick={toggleMobileMenu}>
                    Activities
                </NavLink>
                <NavLink to="/Awards" onClick={toggleMobileMenu}>
                    Awards
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
            </div> */}
        </>
    );
}
