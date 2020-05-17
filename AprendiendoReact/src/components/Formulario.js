import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Home" blogString="Home" size="slider-big" />
        <div className="center">
          <div className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1> */}
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;
