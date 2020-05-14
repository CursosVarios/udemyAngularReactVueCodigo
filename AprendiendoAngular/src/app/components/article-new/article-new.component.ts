import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { Router } from "@angular/router";
import globalVar from "src/app/services/global";

@Component({
  selector: "app-article-new",
  templateUrl: "./article-new.component.html",
  styleUrls: ["./article-new.component.scss"],
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;

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
  imageUpload(e) {
    const imageData = JSON.parse(e.response);
    console.log(imageData);
    this.article.image = imageData.name;
  }
}
