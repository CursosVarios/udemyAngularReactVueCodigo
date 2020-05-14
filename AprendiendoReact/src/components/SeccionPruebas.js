import React, { Component } from "react";

import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  HolaMundo(nombre, edad) {
    return (
      <div>
        <h2>hola pues {nombre}</h2>
        <h3>edad {edad}</h3>
      </div>
    );
  }

  render() {
    return (
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>
        <div id="articles"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.HolaMundo("nombre de alguien", 12)}

        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
