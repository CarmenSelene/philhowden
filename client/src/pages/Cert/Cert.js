import React, { Component } from "react";
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

    renderWhich = () => {
        if (this.state.whichCard === "one") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <small>Click Images To Download Copies</small>
                    <a href={require('../../assets/cards/ministrycert.png')} download="Phillip_Howden_Ministry_Health_Safety.jpg">
                    <img className="certPanel" alt="Ministry Certification" src={require('../../assets/cards/ministrycert.png')} /></a>
                </div>
            )
        } else if (this.state.whichCard === "two") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <small>Click Images To Download Copies</small>
                    <a href={require('../../assets/cards/crane_training.jpg')} download="Phillip_Howden_Crane_Training_Front.jpg">
                    <img className="certPanel" alt="Crane Training" src={require('../../assets/cards/crane_training.jpg')} /></a>
                    <a href={require('../../assets/cards/crane_training_back.jpg')} download="Phillip_Howden_Crane_Training_Back.jpg">
                    <img className="certPanel certPanelMinus" alt="Crane Training Back" src={require('../../assets/cards/crane_training_back.jpg')} /></a>
                </div>
            )
        } else if (this.state.whichCard === "three") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <small>Click Images To Download Copies</small>
                    <a href={require('../../assets/cards/fall_protection.jpg')} download="Phillip_Howden_Fall_Protection_Front.jpg">
                    <img className="certPanel" alt="Fall Protection" src={require('../../assets/cards/fall_protection.jpg')} /></a>
                    <a href={require('../../assets/cards/fall_protection_back.jpg')} download="Phillip_Howden_Fall_Protection_Back.jpg">
                    <img className="certPanel certPanelMinus" alt="Fall Protection Back" src={require('../../assets/cards/fall_protection_back.jpg')} /></a>
                </div>
            )
        } else if (this.state.whichCard === "four") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <small>Click Images To Download Copies</small>
                    <a href={require('../../assets/cards/self_propelled_training.jpg')} download="Phillip_Howden_Self_Propelled_Front.jpg">
                    <img className="certPanel" alt="Self Propelled" src={require('../../assets/cards/self_propelled_training.jpg')} /></a>
                    <a href={require('../../assets/cards/fall_protection_back.jpg')} download="Phillip_Howden_Self_Propelled_Back.jpg">
                    <img className="certPanel certPanelMinus" alt="Self Propelled Back" src={require('../../assets/cards/self_propelled_training_back.jpg')} /></a>
                </div>
            )
        } else if (this.state.whichCard === "five") {
            return (
                <div className="certPage">
                    <NavCert giveFocus={this.giveFocus} />
                    <small>Click Images To Download Copies</small>
                    <a href={require('../../assets/cards/generator_seminar.jpg')} download="Phillip_Howden_Generator_Seminar.jpg">
                    <img className="certPanel" alt="Generator Seminar" src={require('../../assets/cards/generator_seminar.jpg')} /></a>
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

