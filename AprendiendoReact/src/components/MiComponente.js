import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    const receta = {
      nombre: "pizza",
      ingredientes: ["tomate", "queso", "jamos cocido"],
      calorias: 400,
    };
    return (
      <React.Fragment>
        <h1> {receta.nombre}</h1>
        <h2> {receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ing, i) => {
            return <li key={i}>{ing}</li>;
          })}
        </ol>
      </React.Fragment>
    );
  }
}
export default MiComponente;
