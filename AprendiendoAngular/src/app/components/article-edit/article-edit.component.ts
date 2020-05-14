import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import globalVar from "src/app/services/global";

import swal from "sweetalert";

@Component({
  selector: "app-article-edit",
  templateUrl: "./article-edit.component.html",
  styleUrls: ["./article-edit.component.scss"],
  providers: [ArticleService],
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string;
  public isEdit: boolean;
  public url: string;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: globalVar.url + "upload-image/",
      // headers: {
      //   "Content-Type": "text/plain;charset=UTF-8",
      //   Authorization: `Bearer ${token}`,
      // },
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: "Select Files",
      resetBtn: "Reset",
      uploadBtn: "Upload",
      dragNDropBox: "Drag N Drop",
      attachPinBtn: "Sube tu imagen para el articulo",
      afterUploadMsg_success: "Successfully Uploaded !",
      afterUploadMsg_error: "Upload Failed !",
    },
  };
  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    // this.article = new Article("", "", "", null, null);
    this.url = globalVar.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    console.log(this.article);
    this._articleService.update(this.article).subscribe(
      (res) => {
        if (res.msg) {
          this.article = res.msg;
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
  imageUpload(e) {
    const imageData = JSON.parse(e.response);
    console.log(imageData);
    this.article.image = imageData.name;
  }
  getArticle() {
    this._route.params.subscribe((params: Params) => {
      const id = params["id"];
      this._articleService.getArticle(id).subscribe(
        (res) => {
          if (res.article) {
            this.article = res.article;
            this.afuConfig.uploadAPI.url += this.article._id;
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
}
