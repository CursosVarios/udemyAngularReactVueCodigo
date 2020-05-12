import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.scss"],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  titulo: string;
  peliculas: Array<any>;
  constructor() {
    this.titulo = "peliculas";
    this.peliculas = [
      {
        title: "spider",
        img: "https://i.ytimg.com/vi/PUSp8ox1QYo/maxresdefault.jpg",
      },
      {
        title: "vengadores",
        img:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-marvel-netflix-1554116074.jpg?crop=1.00xw:0.445xh;0,0.134xh&resize=480:*",
      },
      {
        title: "bantamn vs superman barata",
        img: "https://i.ytimg.com/vi/PbSw8cP_6W4/maxresdefault.jpg",
      },
      {
        title: "otra",
        img:
          "https://es.web.img2.acsta.net/medias/nmedia/18/89/61/50/20058082.jpg",
      },
    ];
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
