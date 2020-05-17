import React, { Component } from "react";
import { Link } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <div className={this.props.size} id="slider">
        <h1>{this.props.title}</h1>
        {this.props.blogString && (
          <Link to="/Blog" className="btn-white">
            {this.props.blogString}
          </Link>
        )}
      </div>
    );
  }
}

export default Slider;
