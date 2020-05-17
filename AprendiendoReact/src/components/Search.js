import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {
  componentWillMount() {
    // this.props
  }
  render() {
    let busqueda = this.props.match.params.search;
    // const busqueda = this.props.match.params.serach;
    return (
      <React.Fragment>
        <Slider title={"Busqueda" + busqueda} size="slider-small" />
        <div className="center">
          <div className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}

            <Articles search={busqueda}></Articles>
          </div>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
