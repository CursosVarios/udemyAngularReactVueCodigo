import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/app/services/article.service";
import { Article } from "src/app/models/article";
import { Router, ActivatedRoute, Params } from "@angular/router";
import globalVar from "src/app/services/global";
import Swal from "sweetalert2";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public title: string;
  public article: Article;
  public url: string;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "titulo";
    this.url = globalVar.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params["id"];
      this._articleService.getArticle(id).subscribe(
        (res) => {
          if (res.article) {
            this.article = res.article;
            console.log(this.article);
          } else {
            this._router.navigate(["/home"]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  borrarArticle(id) {
    Swal.fire({
      title: "estas seguro?",
      text: "una vez borrado el articulo no podra recuperarlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this._articleService.delete(id).subscribe(
          (res) => {
            console.log(res);
            if (res.msg) {
              // alert(" Articulo Borrado Correctamente");
              Swal.fire(
                "Articulo borrado",
                "el articulo se borro correctamente",
                "success"
              );
              this._router.navigate(["/blog"]);
            }
          },
          (err) => {
            console.log(err);
            Swal.fire("Ariculo borrado", "el articulo no se borro", "error");
          }
        );
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("Tranquilo nada se a borrado");
      }
    });
  }
}
