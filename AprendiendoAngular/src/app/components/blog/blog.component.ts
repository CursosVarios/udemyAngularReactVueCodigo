import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  titulo: string;
  constructor() {
    this.titulo = " titulo del blog";
  }

  ngOnInit(): void {}
}
