import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Home" blogString="Home" size="slider-big" />
        <div className="center">
          <div id="content">
            {/* <h1 className="subheader">Ultimos articulos</h1> */}
            <Articles home="true"></Articles>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
