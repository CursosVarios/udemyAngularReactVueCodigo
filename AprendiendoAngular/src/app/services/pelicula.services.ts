import { Injectable } from "@angular/core";
import Pelicula from "../models/pelicula";

@Injectable()
export class PeliculaService {
  public peliculas: Pelicula[];
  constructor() {
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
  }
  holaMundo() {
    return "hola mundo desde servicio";
  }

  getPelicuals() {
    return this.peliculas;
  }
}
