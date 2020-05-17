import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Blog" size="slider-small" />
        <div className="center">
          <section id="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}

            <Articles></Articles>
          </section>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
