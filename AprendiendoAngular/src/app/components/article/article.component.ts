import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = "titulo";
  }

  ngOnInit(): void {}
}
