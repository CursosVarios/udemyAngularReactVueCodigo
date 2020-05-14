import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/scss/App.scss";
import MiComponente from "./components/MiComponente";

//impor componentes

function HolaMundo(nombre, edad) {
  return (
    <div>
      <h2>hola pues {nombre}</h2>
      <h3>edad {edad}</h3>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {HolaMundo("nombre de alguien", 12)}
      </header>
      <sectio className="componentes">
        <MiComponente />
        <MiComponente />
        <MiComponente />
        <MiComponente />
      </sectio>
    </div>
  );
}

export default App;
