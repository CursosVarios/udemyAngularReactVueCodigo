import React, { Component } from "react";
import MensajeEstatico from "./MensajeEstatico";

class Peliculas extends Component {
  render() {
    return (
      <React.Fragment>
        <h4> Componente de peliculas</h4>
        <MensajeEstatico />
      </React.Fragment>
    );
  }
}

export default Peliculas;
