import React from "react";
import { Animate } from "react-show";

class HideShow extends React.Component {
    state = {
        show: true
    };

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        const { show } = this.state;

        return (
            <div>
                <button onClick={this.toggleShow}>{show ? "Hide" : "Show"}</button>
                <div>
                    <h3>Collapse</h3>
                    <Animate
                        show={show}
                        transitionOnMount
                        stayMounted
                        style={{
                            width: "100px",
                            height: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                            transformOrigin: "center",
                            background: "white"
                        }}
                        start={{
                            height: 0
                        }}
                    >
                        <strong hidden={show}>{}</strong>
                    </Animate>
                </div>
                <div style={{ height: "200px" }}>
                    <div
                        style={{
                            marginBottom: "200rem"
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default HideShow;