import React from "react";
import logo from "./logo.svg";
import "./App.scss";

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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
