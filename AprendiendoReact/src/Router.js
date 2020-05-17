import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MiComponente from "./components/MiComponente";
import Error from "./components/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        {/* <Peliculas /> */}
        {/* se pondran todas las rutas */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
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

        <Footer />
      </BrowserRouter>
    );
  }
}
export default Router;
