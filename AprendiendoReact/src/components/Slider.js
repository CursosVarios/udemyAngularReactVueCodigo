import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="slider-big" id="slider">
        <h1>{this.props.title}</h1>
        <a className="btn-white">{this.props.blogString}</a>
      </div>
    );
  }
}

export default Slider;
