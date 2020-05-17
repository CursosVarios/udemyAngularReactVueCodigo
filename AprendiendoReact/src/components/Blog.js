import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Blog" size="slider-small" />
        <div className="center">
          <div className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}
          </div>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
