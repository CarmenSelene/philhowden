import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="App-navbar">
            <ul>
                <li><Link to={'/'}>Resume</Link></li>
                <li><Link to={'/cert'}>Certifications</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;