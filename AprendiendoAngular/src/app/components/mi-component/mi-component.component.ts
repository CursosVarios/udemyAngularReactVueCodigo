import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-mi-component",
//   templateUrl: "./mi-component.component.html",
//   styleUrls: ["./mi-component.component.scss"],
// })
// export class MiComponentComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }

@Component({
  selector: "mi-componente",
  templateUrl: "./mi-component.component.html",
  styleUrls: ["./mi-component.component.scss"],
})
export class MiComponentComponent {
  titulo: string;
  comentario: string;
  year: number;
  constructor() {
    this.titulo = "este es el titulo";
    this.comentario = "comentario";
    this.year = 251;
  }
}
