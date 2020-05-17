import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Sidebar extends Component {
  seatchRef = React.createRef();
  state = {
    search: "",
    redirec: "false",
  };
  redirecSearch = (e) => {
    e.preventDefault();
    console.log(this.seatchRef);
    this.setState({
      search: this.seatchRef.current.value,
      redirec: "true",
    });
  };
  render() {
    if (this.state.redirec === "true") {
      return <Redirect to={"/blog/busqueda/" + this.state.search}></Redirect>;
    }
    return (
      <aside id="sidebar">
        {this.props.blog === "true" && (
          <div className="sidebat-item" id="nav-blog">
            <h3>Puedes hacer esto </h3>
            <Link to="/blog/nuevo" className="btn btn-success">
              crear articulo
            </Link>
          </div>
        )}
        <div className="sidebat-item" id="search">
          <h3>Puedes hacer esto </h3>
          <p>encuentra el articulo que buscas</p>
          <form action="#" onSubmit={this.redirecSearch}>
            <input type="text" name="search" ref={this.seatchRef} />
            <input type="submit" name="submit" value="buscar" className="btn" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
