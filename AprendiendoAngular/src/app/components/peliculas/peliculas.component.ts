import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import Pelicula from "src/app/models/pelicula";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.scss"],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;
  constructor() {
    this.titulo = "peliculas";
    this.peliculas = [
      new Pelicula(
        "spider",
        2019,
        "https://i.ytimg.com/vi/PUSp8ox1QYo/maxresdefault.jpg"
      ),
      new Pelicula(
        "vengadores",
        2018,
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-marvel-netflix-1554116074.jpg?crop=1.00xw:0.445xh;0,0.134xh&resize=480:*"
      ),
      new Pelicula(
        "bantamn vs superman barata",
        2015,
        "https://i.ytimg.com/vi/PbSw8cP_6W4/maxresdefault.jpg"
      ),
      new Pelicula(
        "otra",
        2011,
        "https://es.web.img2.acsta.net/medias/nmedia/18/89/61/50/20058082.jpg"
      ),
    ];
    this.fecha = new Date();
  }

  ngOnInit(): void {
    console.log("Conponente iniciado");
  }

  ngDoCheck() {
    console.log("do check");
  }
  ngOnDestroy() {
    console.log("cuando destruyan el componente");
  }

  changeTitulo() {
    this.titulo += "1";
  }

  MostrarFavorita(e) {
    // console.log("favorita que llega");
    // console.log(e);
    this.favorita = e.pelicula;
    console.log(this.favorita);
  }
}
