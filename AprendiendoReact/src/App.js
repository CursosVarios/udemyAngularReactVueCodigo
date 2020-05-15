import React from "react";
import "./assets/scss/App.scss";
//

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";
import Router from "./Router";
//impor componentes

function App() {
  const blogString = "ir al blog";
  return (
    <div className="App">
      <Header />
      <Slider title=" Titulo de la pagian w eb" blogString={blogString} />

      <div className="center">
        {/* <Peliculas /> */}
        <Router></Router>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
