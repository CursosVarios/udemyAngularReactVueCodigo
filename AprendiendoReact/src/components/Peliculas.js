import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {};

  componentWillMount() {
    this.setState({
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
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
        {
          title: "looper",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyAMEw4Pg_MTY4e_mCK5xIzw32lQ6Tf4SPnCGE8x4bTytCbB4P&usqp=CAU",
          date: 2018,
        },
      ],
      favorita: null,
    });
  }
  componentDidMount() {
    console.log("el componente se monto");
  }

  componentWillUnmount() {
    console.log("componete se  va a eliminar");
  }
  CambiarTitulo = () => {
    let { peliculas } = this.state;

    var random = Math.floor(Math.random() * peliculas.length);
    // console.log(random);
    peliculas[random].title = "batman 2";
    this.setState(peliculas);
  };
  favorita = (pelicula, i) => {
    console.log("marcada favorita ", i);
    console.log(pelicula);
    this.setState({ favorita: pelicula });
  };
  render() {
    return (
      <React.Fragment>
        <section id="content">
          <h4 className="subheader"> Componente de peliculas</h4>
          <p>
            <input
              type="button"
              value="cambiarTitulo"
              onClick={this.CambiarTitulo}
            />
          </p>
          {this.state.favorita && (
            <p>
              <strong>Pelicula Favorita: </strong>
              <span>{this.state.favorita.title}</span>
            </p>
          )}
          <div id="articles" className="peliculas">
            {this.state.peliculas.map((peli, i) => {
              return (
                <Pelicula
                  key={i}
                  pelicula={peli}
                  marcarFavorita={this.favorita}
                  indice={i}
                />
              );
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Peliculas;
