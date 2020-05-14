import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [ArticleService],
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public articles: Article[];
  constructor(private _articuleService: ArticleService) {
    this.titulo = "ultimos articulos";
  }

  ngOnInit(): void {
    this._articuleService.getArticles("1").subscribe(
      (response) => {
        if (response.article) {
          this.articles = response.article;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
