import React, { Component } from "react";
// import axios from "axios";
import NavCert from "./NavCert";
import "./Cert.css";

export default class Cert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whichCard: "one"
        };
        this.giveFocus = this.giveFocus.bind(this);
        this.renderWhich = this.renderWhich.bind(this);
    }

    giveFocus = (givethis) => {
        if (givethis === "one") {
            this.setState({ whichCard: "one" });
        } else if (givethis === "two") {
            this.setState({ whichCard: "two" });
        } else if (givethis === "three") {
            this.setState({ whichCard: "three" });
        } else if (givethis === "four") {
            this.setState({ whichCard: "four" });
        } else if (givethis === "five") {
            this.setState({ whichCard: "five" });
        } else if (givethis === "six") {
            this.setState({ whichCard: "six" });
        } else if (givethis === "seven") {
            this.setState({ whichCard: "seven" });
        } else {
            console.log("nothing happened");
        }
    }

    // downloadMe = (which) => {
    //     return axios.get(which);
    // };

    renderWhich = () => {
        if (this.state.whichCard === "one") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    {/* <button onClick={() => {this.downloadMe("ministrycert.png")}} className="downloadButton">Download</button> */}
                    <img className="certPanel" alt="Ministry Certification" src={require('../../assets/cards/ministrycert.png')} />
                </div>
            )
        } else if (this.state.whichCard === "two") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <img className="certPanel" alt="Crane Training" src={require('../../assets/cards/crane_training.jpg')} />
                    <img className="certPanel certPanelMinus" alt="Crane Training Back" src={require('../../assets/cards/crane_training_back.jpg')} />
                </div>
            )
        } else if (this.state.whichCard === "three") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <img className="certPanel" alt="Fall Protection" src={require('../../assets/cards/fall_protection.jpg')} />
                    <img className="certPanel certPanelMinus" alt="Fall Protection Back" src={require('../../assets/cards/fall_protection_back.jpg')} />
                </div>
            )
        } else if (this.state.whichCard === "four") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <img className="certPanel" alt="Self Propelled" src={require('../../assets/cards/self_propelled_training.jpg')} />
                    <img className="certPanel certPanelMinus" alt="Self Propelled Back" src={require('../../assets/cards/self_propelled_training_back.jpg')} />
                </div>
            )
        } else if (this.state.whichCard === "five") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <img className="certPanel" alt="Generator Seminar" src={require('../../assets/cards/generator_seminar.jpg')} />
                </div>
            )
        } else {
            console.log("something went wrong");
        }
    }

    render() {
        return this.renderWhich();
    }
}

