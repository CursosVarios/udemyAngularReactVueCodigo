import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Pelicula from "src/app/models/pelicula";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.scss"],
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  @Input() i: number;
  @Output() MarcarFavorita = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selecionarFavorita(e, p) {
    // console.log({ e, p });
    this.MarcarFavorita.emit({ pelicula: p });
  }
}
