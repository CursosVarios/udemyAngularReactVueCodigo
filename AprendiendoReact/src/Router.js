import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MiComponente from "./components/MiComponente";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Peliculas from "./components/Peliculas";
import ArticleDetails from "./components/ArticleDetails";
import Search from "./components/Search";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
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
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/articulo/crear" component={CreateArticle} />
          <Route
            exact
            path="/blog/articulo/editar/:id"
            component={EditArticle}
          />
          <Route exact path="/blog/articulo/:id" component={ArticleDetails} />
          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route
            exact
            path="/redirect/:search"
            render={(props) => {
              let search = props.match.params.search;
              return <Redirect to={"/blog/busqueda/" + search} />;
            }}
          />

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
