import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./pages/Resume/Resume";
import Cert from "./pages/Cert/Cert";
import Contact from "./pages/Contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Header */}
          <div className="App-header">
            <span className="title">Phillip Howden</span>
            <span className="subTitle">phillip.howden@gmail.com<br />
              647-880-7550<br />
              Working out of the Greater Toronto Area</span>
          </div>
          {/* Navbar */}
          <Navbar />
          {/* Routes */}
          <div className="App-body">
            <Route exact={true} path="/" component={Resume} />
            <Route exact={true} path="/cert" component={Cert} />
            <Route exact={true} path="/contact" component={Contact} />
          </div>
          {/* Footer */}
          <div className="App-footer">
            Phillip Howden 2019
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
