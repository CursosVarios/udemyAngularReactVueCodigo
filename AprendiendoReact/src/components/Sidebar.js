import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebar">
        <div className="sidebat-item" id="nav-blog">
          <h3>Puedes hacer esto </h3>
          <a className="btn btn-success">crear articulo</a>
        </div>
        <div className="sidebat-item" id="search">
          <h3>Puedes hacer esto </h3>
          <p>encuentra el articulo que buscas</p>
          <form action="#">
            <input type="text" name="search" />
            <input type="submit" name="submit" value="buscar" className="btn" />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
