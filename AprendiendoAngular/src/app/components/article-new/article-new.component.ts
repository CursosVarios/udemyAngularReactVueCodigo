import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ArticuleService } from "src/app/services/article.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-article-new",
  templateUrl: "./article-new.component.html",
  styleUrls: ["./article-new.component.scss"],
  providers: [ArticuleService],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;

  constructor(
    private _articleService: ArticuleService,
    private _router: Router
  ) {
    this.article = new Article("", "", "", null, null);
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.article);
    this._articleService.create(this.article).subscribe(
      (res) => {
        console.log(res.article);
        if (res.article) {
          this.article = res.article;
          this._router.navigate(["/blog/articulo", this.article._id]);
        } else {
          this.status = "error";
        }
      },
      (err) => {
        console.log(err);
        this.status = "error";
      }
    );
  }
}
