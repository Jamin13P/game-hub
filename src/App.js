import React, { Component } from "react";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import "./styles/App.css";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? null : <Nav />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
