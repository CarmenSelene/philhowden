import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="App-navbar">
            <ul className="mainUl">
                <li className="mainli"><Link to={'/'}>Resume</Link></li>
                <li className="mainli"><Link to={'/cert'}>Certifications</Link></li>
                <li className="mainli"><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;