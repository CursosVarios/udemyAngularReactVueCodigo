import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
class Router extends Component {
  render() {
    const blogString = "ir al blog";
    return (
      <BrowserRouter>
        <Header />
        <Slider title=" Titulo de la pagian w eb" blogString={blogString} />

        <div className="center">
          {/* <Peliculas /> */}

          {/* se pondran todas las rutas */}
          <Switch>
            <Route exact path="/" component={Peliculas} />
            <Route exact path="/ruta-prueba" component={SeccionPruebas} />
            <Route exact path="/mi-componente" component={MiComponente} />

            <Route exact path="/pg2" render={() => <h1>hh</h1>} />
            <Route exact path="/pg1" render={() => <h1>pg1</h1>} />

            <Route
              exact
              path="/pruebas/:nombre/:apellido?"
              render={(props) => {
                return (
                  <div className="content">
                    <h1>pagina pruebas</h1>
                    Nomnre:{props.match.params.nombre}
                    <br />
                    Apellido:{props.match.params.apellido}
                  </div>
                );
              }}
            />

            <Route component={Error} />
          </Switch>

          <Sidebar />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Router;
