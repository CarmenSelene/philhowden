import React from "react";
import "./Cert.css";

function NavCert(props) {
    return (
        <nav className="certNav" >
            <ul className="cardUl">
                <li className="cardLi"><strong className="certNavButton" onClick={() => { props.giveFocus('one'); }}>Health & Safety</strong></li>
                <li className="cardLi"><strong className="certNavButton" onClick={() => { props.giveFocus('two'); }}>Self-Propelled</strong></li>
                <li className="cardLi"><strong className="certNavButton" onClick={() => { props.giveFocus('three'); }}>Working at Heights</strong></li>
                <li className="cardLi"><strong className="certNavButton" onClick={() => { props.giveFocus('four'); }}>Elevated Platforms</strong></li>
                <li className="cardLi"><strong className="certNavButton" onClick={() => { props.giveFocus('five'); }}>Generator Training</strong></li>
            </ul>
        </nav>
    );
}
export default NavCert;