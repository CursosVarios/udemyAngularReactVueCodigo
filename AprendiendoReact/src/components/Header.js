import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import Navegation from "./Navegation";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          <div id="logo">
            <img src={logo} alt="logo de react" />
            <span id="brand">
              <strong>Master</strong>FreamWorksJS
            </span>
          </div>
          <Navegation />
        </div>
      </header>
    );
  }
}
export default Header;
