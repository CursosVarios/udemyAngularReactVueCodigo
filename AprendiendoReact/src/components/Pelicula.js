import React, { Component } from "react";

class Pelicula extends Component {
  render() {
    console.log(this.props);
    return (
      <article class="article-item-detail">
        <div class="image-wrap">
          <img src={this.props.img} alt="imagen estrellas" />
        </div>
        <h1 class="subheader">{this.props.title}</h1>

        <span class="date">{this.props.date} </span>
        <a href="">Leer mas</a>
        <div class="clearfix"></div>
      </article>
    );
  }
}
export default Pelicula;
