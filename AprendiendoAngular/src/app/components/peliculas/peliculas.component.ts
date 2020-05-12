import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.scss"],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  titulo: string;
  constructor() {
    this.titulo = "peliculas";
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
}
