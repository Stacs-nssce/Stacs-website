import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    // let menuClk = document.getElementById('menu')
    // // const moibleViewClk = document.querySelector('.mobile-nav');
    // if(menuClk)
    //     menuClk.addEventListener('focus', () => {
    //         console.log("hi");
    //     });

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
                <svg
                    id="menu"
                    className="menu"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="#ffbf23"
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                </svg>
            </nav>
            <div className="mobile-nav">
                <NavLink to="/Faculties">Faculties</NavLink>
                <NavLink to="/Activities">Activities</NavLink>
                <NavLink to="/Awards">Awards</NavLink>
                <NavLink to="/Newsletter">Newsletter</NavLink>
                <NavLink to="/Gallery">Gallery</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                <NavLink to="/Commitee">Commitee</NavLink>
            </div>
        </>
    );
}
