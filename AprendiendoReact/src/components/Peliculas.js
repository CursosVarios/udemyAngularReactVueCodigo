import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        title: "batman vs superman",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._AC_SL1500_.jpg",
        date: 2018,
      },
      {
        title: "Spiderman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx3-8kLIktys2qe0Do9Ca05-Mx-yE556SFwZXHsqOi33vqvdT5&usqp=CAU",
        date: 2012,
      },
      {
        title: "looper",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
        date: 2018,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section id="content">
          <h4 className="subheader"> Componente de peliculas</h4>
          {this.state.peliculas.map((peli, i) => {
            return (
              <Pelicula img={peli.image} title={peli.title} date={peli.date} />
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default Peliculas;
