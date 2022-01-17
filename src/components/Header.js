import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="purple darken-4">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    Logo
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
