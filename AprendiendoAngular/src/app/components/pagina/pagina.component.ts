import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-pagina",
  templateUrl: "./pagina.component.html",
  styleUrls: ["./pagina.component.scss"],
})
export class PaginaComponent implements OnInit {
  nombre: string;
  apellido: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });
  }
}
