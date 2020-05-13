import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Article } from "src/app/models/article";
import { ArticuleService } from "src/app/services/article.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [ArticuleService],
})
export class SearchComponent implements OnInit {
  public articles: Article[];
  public search: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleservice: ArticuleService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const search = params["search"];
      this.search = search;
      this._articleservice.search(search).subscribe(
        (res) => {
          console.log(res);
          console.log("entrada");
          if (res.art) {
            this.articles = res.art;
          } /* else {
            alert("no se encontro nada");
            //this._router.navigate(["/home"]);
          } */
        },
        (err) => {
          console.log(err);
          this.articles = [];
          // alert("no se encontro nada");
        }
      );
    });
  }
}
