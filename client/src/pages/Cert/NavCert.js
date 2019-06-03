import React from "react";
import "./Cert.css";

function NavCert(props) {
    return (
        <span className="certNav">
            <ul className="cardUl">
                <li className="cardLi"><button onClick={() => { props.giveFocus('one'); }}>One</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('two'); }}>Two</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('three'); }}>Three</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('four'); }}>Four</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('five'); }}>Five</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('six'); }}>Six</button></li>
                <li className="cardLi"><button onClick={() => { props.giveFocus('seven'); }}>Seven</button></li>
            </ul>
        </span>
    );
}
export default NavCert;