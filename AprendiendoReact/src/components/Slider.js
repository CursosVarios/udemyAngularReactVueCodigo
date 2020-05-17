import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <div className={this.props.size} id="slider">
        <h1>{this.props.title}</h1>
        {this.props.blogString && (
          <NavLink to="/blog" className="btn-white">
            {this.props.blogString}
          </NavLink>
        )}
      </div>
    );
  }
}

export default Slider;
