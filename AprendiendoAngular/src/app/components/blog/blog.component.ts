import { Component, OnInit } from "@angular/core";
import { ArticuleService } from "src/app/services/article.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  providers: [ArticuleService],
})
export class BlogComponent implements OnInit {
  titulo: string;
  constructor(private _articleSertvice: ArticuleService) {
    this.titulo = " titulo del blog";
  }

  ngOnInit(): void {
    // console.log(this._articleSertvice.pruebas());
    this._articleSertvice.getArticles().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
