import React from "react";
import "./Cert.css";

function NavCert(props) {
    return (
        <nav className="certNav" >
            <ul className="certUl">
                <li className="certLi"><strong className="certNavButton" onClick={() => { props.giveFocus('one'); }}>Health & Safety</strong></li>
                <li className="certLi"><strong className="certNavButton" onClick={() => { props.giveFocus('two'); }}>Self-Propelled</strong></li>
                <li className="certLi"><strong className="certNavButton" onClick={() => { props.giveFocus('three'); }}>Working at Heights</strong></li>
                <li className="certLi"><strong className="certNavButton" onClick={() => { props.giveFocus('four'); }}>Elevated Platforms</strong></li>
                <li className="certLi"><strong className="certNavButton" onClick={() => { props.giveFocus('five'); }}>Generator Training</strong></li>
            </ul>
        </nav>
    );
}
export default NavCert;