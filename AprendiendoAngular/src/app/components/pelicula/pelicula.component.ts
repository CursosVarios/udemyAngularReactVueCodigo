import { Component, OnInit, Input } from "@angular/core";
import Pelicula from "src/app/models/pelicula";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styleUrls: ["./pelicula.component.scss"],
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;
  @Input() i: number;
  constructor() {}

  ngOnInit(): void {}
}
