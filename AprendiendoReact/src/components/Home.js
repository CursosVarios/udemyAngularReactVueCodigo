import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Home" blogString="Home" />
        <div className="center">
          <div className="content">
            <h1 className="subheader">Ultimos articulos</h1>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
