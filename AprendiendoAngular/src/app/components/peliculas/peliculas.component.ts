import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import Pelicula from "src/app/models/pelicula";
import { PeliculaService } from "src/app/services/pelicula.services";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.scss"],
  providers: [PeliculaService],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;
  constructor(private _peliculaServices: PeliculaService) {
    this.titulo = "peliculas";
    //this.peliculas = [];
    this.fecha = "2020";
  }

  ngOnInit(): void {
    console.log("Conponente iniciado");
    console.log(this._peliculaServices.holaMundo());
    this.peliculas = this._peliculaServices.getPelicuals();
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
