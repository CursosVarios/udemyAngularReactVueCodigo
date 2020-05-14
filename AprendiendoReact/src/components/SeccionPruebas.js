import React, { Component } from "react";

import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  contador = 0;
  /*   constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  } */
  state = {
    contador: 0,
  };
  HolaMundo(nombre, edad) {
    return (
      <div>
        <h2>hola pues {nombre}</h2>
        <h3>edad {edad}</h3>
      </div>
    );
  }
  Sumar() {
    // this.contador++;
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  Restar() {
    // this.contador--;
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>
        <div id="articles"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2 className="subheader"> Funciones y jsx basico</h2>
        {this.HolaMundo("nombre de alguien", 12)}

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
        <h2 className="subheader">estados</h2>
        <p>Contador:{this.state.contador}</p>
        <p>
          <input type="button" value="+" onClick={this.Sumar.bind(this)} />
          <input type="button" value="-" onClick={this.Restar.bind(this)} />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
