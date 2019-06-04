import React from "react";
import { Animate } from "react-show";

class Resume extends React.Component {
    state = {
        certShow: false,
        vtrShow: false,
        gafferShow: false,
        dailyElShow: false,
        dailyGripShow: false,
        paShow: false,
        references: false
    };

    toggleShow = (which) => {
        this.setState({
            [which]: !this.state[which]
        });
    };

    render() {
        return (
            <div className="resumeblock">
                <small className="clickTo">~ click to expand ~</small>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("certShow") }}><i className="fas fa-plus addpadd"></i>  Certifications and Training
                        <Animate
                            show={this.state.certShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* Certifications */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>11/26/2017</td>
                                        <td colSpan="2">William F. Whites Generator Operator ROT</td>
                                    </tr>
                                    <tr >
                                        <td>11/07/2017</td>
                                        <td colSpan="2">William F. Whites Dimming/Control Board Systems</td>
                                    </tr>
                                    <tr>
                                        <td>10/18/2017</td>
                                        <td colSpan="2">William F. Whites Lighting & Grip</td>
                                    </tr>
                                    <tr>
                                        <td>10/04/2017</td>
                                        <td colSpan="2">Propane ROT</td>
                                    </tr>
                                    <tr>
                                        <td>10/23/2017</td>
                                        <td colSpan="2">Working at Heights</td>
                                    </tr>
                                    <tr>
                                        <td>09/10/2016</td>
                                        <td colSpan="2">Dwight Crane Safety Course</td>
                                    </tr>
                                    <tr>
                                        <td>06/23/2016</td>
                                        <td colSpan="2">Health and Safety Certificate</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("vtrShow") }}><i className="fas fa-plus addpadd"></i> VTR Assistant
                <Animate
                            show={this.state.vtrShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* VTR Assistant */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>08/21/2018</td>
                                        <td colSpan="2">Director Will Waring</td>
                                    </tr>
                                    <tr>
                                        <td>10/22/2018</td>
                                        <td colSpan="2">Glen Zapreff VTR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("gafferShow") }}><i className="fas fa-plus addpadd"></i> Gaffer Work Experience
                <Animate
                            show={this.state.gafferShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* Gaffer Work Experience */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>03/05/2018</td>
                                        <td>Asopa Films Inc.</td>
                                        <td>Bloody Romeo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("dailyElShow") }}><i className="fas fa-plus addpadd"></i> Daily Electric Experience
                <Animate
                            show={this.state.dailyElShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* Daily Electric Experience */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>09/08/2018</td>
                                        <td>Todd Hamacher</td>
                                        <td>Neutrogena</td>
                                    </tr>
                                    <tr>
                                        <td>05/05/2019</td>
                                        <td>Neil Munro</td>
                                        <td>Bright Health</td>
                                    </tr>
                                    <tr>
                                        <td>05/13/2019</td>
                                        <td>David Lewis</td>
                                        <td>MayDay</td>
                                    </tr>
                                    <tr>
                                        <td>05/22/2019</td>
                                        <td>Blayne Badge</td>
                                        <td>Akilla</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("dailyGripShow") }}><i className="fas fa-plus addpadd"></i> Daily Grip Experience
                <Animate
                            show={this.state.dailyGripShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* Daily Grip Experience */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>07/10/2018</td>
                                        <td>Jack O'Brian</td>
                                        <td>Tim Hortons</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("paShow") }}><i className="fas fa-plus addpadd"></i> Production Assistant Work Experience
                <Animate
                            show={this.state.paShow}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            {/* Production Assistant Work Experience */}
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>05/08/2019</td>
                                        <td>Steam Films</td>
                                        <td>Droga 5</td>
                                    </tr>
                                    <tr>
                                        <td>05/04/2019</td>
                                        <td>Skin and Bones</td>
                                        <td>Bright Health</td>
                                    </tr>
                                    <tr>
                                        <td>04/24/2019</td>
                                        <td>Circle Inc</td>
                                        <td>Holiday Inn Express</td>
                                    </tr>
                                    <tr>
                                        <td>04/21/2019</td>
                                        <td>Suneeva</td>
                                        <td>Honeywell</td>
                                    </tr>
                                    <tr>
                                        <td>04/16/2019</td>
                                        <td>Animals Inc</td>
                                        <td>Maple Leaf Farms</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2019</td>
                                        <td>Steam Films</td>
                                        <td>KIA</td>
                                    </tr>
                                    <tr>
                                        <td>04/05/2019</td>
                                        <td>Skin and Bones</td>
                                        <td>Hockey Hall of Fame</td>
                                    </tr>
                                    <tr>
                                        <td>04/01/2019</td>
                                        <td>Steam Films</td>
                                        <td>Hunt's</td>
                                    </tr>
                                    <tr>
                                        <td>03/28/2019</td>
                                        <td>Holiday Films</td>
                                        <td>Reliance Home Comfort</td>
                                    </tr>
                                    <tr>
                                        <td>03/24/2019</td>
                                        <td>Radke</td>
                                        <td>No Frills</td>
                                    </tr>
                                    <tr>
                                        <td>03/14/2019</td>
                                        <td>Skin and Bones</td>
                                        <td>Tostitos</td>
                                    </tr>
                                    <tr>
                                        <td>03/09/2019</td>
                                        <td>Circle Inc</td>
                                        <td>Mc Donalds</td>
                                    </tr>
                                    <tr>
                                        <td>03/01/2019</td>
                                        <td>Animals Inc</td>
                                        <td>Tim Hortons</td>
                                    </tr>
                                    <tr>
                                        <td>02/26/2019</td>
                                        <td>Steam Films</td>
                                        <td>BMO</td>
                                    </tr>
                                    <tr>
                                        <td>02/16/2019</td>
                                        <td>OPC</td>
                                        <td>Fallsview Casino</td>
                                    </tr>
                                    <tr>
                                        <td>02/14/2019</td>
                                        <td>OPC</td>
                                        <td>Twinnings</td>
                                    </tr>
                                    <tr>
                                        <td>02/10/2019</td>
                                        <td>Suneeva</td>
                                        <td>ButterBall</td>
                                    </tr>
                                    <tr>
                                        <td>02/05/2019</td>
                                        <td>Skin and Bones</td>
                                        <td>Mc Cafe</td>
                                    </tr>
                                    <tr>
                                        <td>01/29/2019</td>
                                        <td>SomePlace Nice</td>
                                        <td>Home Hardware</td>
                                    </tr>
                                    <tr>
                                        <td>01/18/2019</td>
                                        <td>Skin and Bones</td>
                                        <td>PC Organics</td>
                                    </tr>
                                    <tr>
                                        <td>01/08/2019</td>
                                        <td>Holiday Films</td>
                                        <td>Subaru</td>
                                    </tr>
                                    <tr>
                                        <td>12/14/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>Dairy Farmers</td>
                                    </tr>
                                    <tr>
                                        <td>12/06/2018</td>
                                        <td>Wilfrid Park</td>
                                        <td>Canadian Tire</td>
                                    </tr>
                                    <tr>
                                        <td>12/02/2018</td>
                                        <td>Frozen Man</td>
                                        <td>Athena Health</td>
                                    </tr>
                                    <tr>
                                        <td>11/22/2018</td>
                                        <td>Steam Films</td>
                                        <td>Crispy Minis</td>
                                    </tr>
                                    <tr>
                                        <td>11/15/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>VISA</td>
                                    </tr>
                                    <tr>
                                        <td>11/05/2018</td>
                                        <td>Frank Content</td>
                                        <td>Ford</td>
                                    </tr>
                                    <tr>
                                        <td>11/02/2018</td>
                                        <td>SomePlace Nice</td>
                                        <td>GMC</td>
                                    </tr>
                                    <tr>
                                        <td>10/15/2018</td>
                                        <td>Steam Films</td>
                                        <td>Boston Pizza</td>
                                    </tr>
                                    <tr>
                                        <td>10/10/2018</td>
                                        <td>Wilfrid Park</td>
                                        <td>Best Buy Canada</td>
                                    </tr>
                                    <tr>
                                        <td>09/21/2018</td>
                                        <td>Spy Films</td>
                                        <td>Onlia</td>
                                    </tr>
                                    <tr>
                                        <td>09/17/2018</td>
                                        <td>Scouts Hounor</td>
                                        <td>Silk</td>
                                    </tr>
                                    <tr>
                                        <td>09/15/2018</td>
                                        <td>Animals Inc</td>
                                        <td>Leon's</td>
                                    </tr>
                                    <tr>
                                        <td>09/05/2018</td>
                                        <td>Untitled Films</td>
                                        <td>Investors Group</td>
                                    </tr>
                                    <tr>
                                        <td>08/27/2018</td>
                                        <td>Animals Inc</td>
                                        <td>Google</td>
                                    </tr>
                                    <tr>
                                        <td>08/25/2018</td>
                                        <td>Holiday Films</td>
                                        <td>Subaru</td>
                                    </tr>
                                    <tr>
                                        <td>08/24/2018</td>
                                        <td>Steam Films</td>
                                        <td>Ford</td>
                                    </tr>
                                    <tr>
                                        <td>08/13/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>Bright Health</td>
                                    </tr>
                                    <tr>
                                        <td>08/10/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>Audible</td>
                                    </tr>
                                    <tr>
                                        <td>08/03/2018</td>
                                        <td>Suneeva</td>
                                        <td>TIAA Bank</td>
                                    </tr>
                                    <tr>
                                        <td>07/31/2018</td>
                                        <td>Radke</td>
                                        <td>Pepsi</td>
                                    </tr>
                                    <tr>
                                        <td>07/27/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>Royal Bank Canada</td>
                                    </tr>
                                    <tr>
                                        <td>07/25/2018</td>
                                        <td>Alter Ego</td>
                                        <td>Western Canada Lottery Corp</td>
                                    </tr>
                                    <tr>
                                        <td>07/19/2018</td>
                                        <td>Circle Inc</td>
                                        <td>Google</td>
                                    </tr>
                                    <tr>
                                        <td>07/13/2018</td>
                                        <td>Scouts Hounor</td>
                                        <td>BTS</td>
                                    </tr>
                                    <tr>
                                        <td>07/06/2018</td>
                                        <td>Steam Films</td>
                                        <td>Freedom Mobile</td>
                                    </tr>
                                    <tr>
                                        <td>06/28/2018</td>
                                        <td colSpan="2">Tropicana</td>
                                    </tr>
                                    <tr>
                                        <td>06/27/2018</td>
                                        <td colSpan="2">Hotels.com</td>
                                    </tr>
                                    <tr>
                                        <td>06/25/2018</td>
                                        <td>Untitled Films</td>
                                        <td>Febreze</td>
                                    </tr>
                                    <tr>
                                        <td>06/15/2018</td>
                                        <td>Sequoia</td>
                                        <td>Google</td>
                                    </tr>
                                    <tr>
                                        <td>06/11/2018</td>
                                        <td>Roll Thy Die</td>
                                        <td>Meridian Bank</td>
                                    </tr>
                                    <tr>
                                        <td>06/05/2018</td>
                                        <td>SomePlace Nice</td>
                                        <td>Dempster's</td>
                                    </tr>
                                    <tr>
                                        <td>05/29/2018</td>
                                        <td>Soft Citizen</td>
                                        <td>Maple Leaf</td>
                                    </tr>
                                    <tr>
                                        <td>05/25/2018</td>
                                        <td>Spy Films</td>
                                        <td>Ford Motor Company</td>
                                    </tr>
                                    <tr>
                                        <td>05/17/2018</td>
                                        <td>Steam Films</td>
                                        <td>Canadian Tire</td>
                                    </tr>
                                    <tr>
                                        <td>05/15/2018</td>
                                        <td>Suneeva</td>
                                        <td>Hershey's</td>
                                    </tr>
                                    <tr>
                                        <td>05/12/2018</td>
                                        <td>Skin And Bone's</td>
                                        <td>Rogers</td>
                                    </tr>
                                    <tr>
                                        <td>05/07/2018</td>
                                        <td>Studio M</td>
                                        <td>Tostitos</td>
                                    </tr>
                                    <tr>
                                        <td>05/04/2018</td>
                                        <td>Radke</td>
                                        <td>Google</td>
                                    </tr>
                                    <tr>
                                        <td>05/03/2018</td>
                                        <td>WestSide</td>
                                        <td>Telus</td>
                                    </tr>
                                    <tr>
                                        <td>04/30/2018</td>
                                        <td>Soft Citizen</td>
                                        <td>Audibles</td>
                                    </tr>
                                    <tr>
                                        <td>04/22/2018</td>
                                        <td>Suneeva</td>
                                        <td>Mark's Workwearhouse</td>
                                    </tr>
                                    <tr>
                                        <td>04/16/2018</td>
                                        <td>Soft Citizen</td>
                                        <td>Trane</td>
                                    </tr>
                                    <tr>
                                        <td>04/10/2018</td>
                                        <td>Steam Films</td>
                                        <td>EQ Bank</td>
                                    </tr>
                                    <tr>
                                        <td>03/31/2018</td>
                                        <td>OPC</td>
                                        <td>Max Richter</td>
                                    </tr>
                                    <tr>
                                        <td>03/13/2018</td>
                                        <td>Someplace Nice Inc.</td>
                                        <td>McDonalds</td>
                                    </tr>
                                    <tr>
                                        <td>03/09/2018</td>
                                        <td>Holiday Films Inc</td>
                                        <td>Sonnet</td>
                                    </tr>
                                    <tr>
                                        <td>02/21/2018</td>
                                        <td>OPC</td>
                                        <td>Scotiabank</td>
                                    </tr>
                                    <tr>
                                        <td>02/13/2018</td>
                                        <td>Soft Citizen</td>
                                        <td>McCafe</td>
                                    </tr>
                                    <tr>
                                        <td>01/26/2018</td>
                                        <td>Soft Citizen</td>
                                        <td>DriveTime</td>
                                    </tr>
                                    <tr>
                                        <td>01/23/2018</td>
                                        <td>OPC</td>
                                        <td>Sugar Crisp</td>
                                    </tr>
                                    <tr>
                                        <td>01/15/2018</td>
                                        <td>IQ Productions</td>
                                        <td>Canada Post</td>
                                    </tr>
                                    <tr>
                                        <td>01/11/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>NUPGE</td>
                                    </tr>
                                    <tr>
                                        <td>01/09/2018</td>
                                        <td>Skin and Bones</td>
                                        <td>McPicks</td>
                                    </tr>
                                    <tr>
                                        <td>12/21/2017</td>
                                        <td>Cossette Communication Inc.</td>
                                        <td>Sick Kids</td>
                                    </tr>
                                    <tr>
                                        <td>12/18/2017</td>
                                        <td>Partners</td>
                                        <td>MEDG</td>
                                    </tr>
                                    <tr>
                                        <td>12/12/2017</td>
                                        <td>Sequoia</td>
                                        <td>Hilton Hotels</td>
                                    </tr>
                                    <tr>
                                        <td>11/30/2017</td>
                                        <td>Free Society</td>
                                        <td>Nokia</td>
                                    </tr>
                                    <tr>
                                        <td>11/27/2017</td>
                                        <td>Soft Citizen</td>
                                        <td>Sponge Towels</td>
                                    </tr>
                                    <tr>
                                        <td>11/21/2017</td>
                                        <td>IQ Productions</td>
                                        <td>Fiat Chrysler Automobiles</td>
                                    </tr>
                                    <tr>
                                        <td>11/19/2017</td>
                                        <td>Studio M</td>
                                        <td>Trulicity</td>
                                    </tr>
                                    <tr>
                                        <td>11/10/2017</td>
                                        <td>Zed Films Inc</td>
                                        <td>RPNAO</td>
                                    </tr>
                                    <tr>
                                        <td>11/02/2017</td>
                                        <td>Asymetric</td>
                                        <td>BMO</td>
                                    </tr>
                                    <tr>
                                        <td>10/25/2017</td>
                                        <td>Spy Films</td>
                                        <td>Interac</td>
                                    </tr>
                                    <tr>
                                        <td>10/13/2017</td>
                                        <td>Asymetric</td>
                                        <td>Mark's</td>
                                    </tr>
                                    <tr>
                                        <td>10/11/2017</td>
                                        <td>Gearshift Productions</td>
                                        <td>Spin Master Toys</td>
                                    </tr>
                                    <tr>
                                        <td>10/07/2017</td>
                                        <td>Someplace Nice Inc.</td>
                                        <td>Brooke Bond Tea</td>
                                    </tr>
                                    <tr>
                                        <td>10/05/2017</td>
                                        <td>Someplace Nice Inc.</td>
                                        <td>AGF Investments</td>
                                    </tr>
                                    <tr>
                                        <td>09/24/2017</td>
                                        <td>Soft Citizen</td>
                                        <td>Sobeys</td>
                                    </tr>
                                    <tr>
                                        <td>09/19/2017</td>
                                        <td>Someplace Nice Inc.</td>
                                        <td>TiaRosa</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
                <span className="resumeBlock">
                    {/* References */}
                    <strong className="resumeTitle" onClick={() => { this.toggleShow("references") }}><i className="fas fa-plus addpadd"></i> References 
                <Animate
                            show={this.state.references}
                            transitionOnMount
                            stayMounted
                            style={{
                                width: "auto",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                transformOrigin: "center"
                            }}
                            start={{
                                opacity: 0,
                                height: 0
                            }}
                        >
                            <table className="resumeTable">
                                <tbody>
                                    <tr>
                                        <td>Derek Modesto</td>
                                        <td colSpan="2">derekmodesto@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Steve Bodner</td>
                                        <td>bodner.stephen@gmail.com</td>
                                        <td>647-225-1600</td>
                                    </tr>
                                    <tr>
                                        <td>Brandon Krick</td>
                                        <td>Bkrick@hotmail.com</td>
                                        <td>647-289-8824</td>
                                    </tr>
                                    <tr>
                                        <td>Adrian Mizzi</td>
                                        <td>adrmizzi@hotmail.com</td>
                                        <td>647-680-4954</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Animate>
                    </strong>
                </span>
            </div>
        )
    }
}
export default Resume;