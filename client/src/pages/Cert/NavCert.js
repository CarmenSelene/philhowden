import React from "react";
import "./Cert.css";

function NavCert(props) {
    return (
        <span className="certNav">
            <ul className="cardUl">
                <li className="cardLi"><button onClick={() => { props.giveFocus('one'); }}>Health & Safety</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('two'); }}>Self-Propelled</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('three'); }}>Working at Heights</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('four'); }}>Elevated Platforms</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('five'); }}>Generators</button></li>
            </ul>
        </span>
    );
}
export default NavCert;