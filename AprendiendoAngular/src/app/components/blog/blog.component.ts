import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { Article } from "src/app/models/article";
import globalVar from "src/app/services/global";
@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  public titulo: string;
  public articles: Article[];
  public url: string;

  constructor(private _articleSertvice: ArticleService) {
    this.titulo = " titulo del blog";
    this.url = globalVar.url;
  }

  ngOnInit(): void {
    // console.log(this._articleSertvice.pruebas());
    this._articleSertvice.getArticles().subscribe(
      (res) => {
        console.log(res);
        if (res.article) {
          this.articles = res.article;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
