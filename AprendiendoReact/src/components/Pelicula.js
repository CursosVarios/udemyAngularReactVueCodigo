import React, { Component } from "react";

class Pelicula extends Component {
  marcar = () => {
    const pelicula = this.props.pelicula;
    this.props.marcarFavorita(pelicula, this.props.indice);
  };
  render() {
    //console.log(this.props);
    const { image, title, date } = this.props.pelicula;

    return (
      <article className="article-item">
        <div className="image-wrap">
          <img src={image} alt="imagen estrellas" />
        </div>
        <h2>{title}</h2>

        <span className="date">{date} </span>
        <a href="">Leer mas</a>
        <button onClick={this.marcar}>Marcada como favorita</button>
        <div className="clearfix"></div>
      </article>
    );
  }
}
export default Pelicula;
