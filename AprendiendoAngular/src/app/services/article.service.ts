import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import globalVar from "./global";

@Injectable()
export class ArticuleService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = globalVar.url;
  }
  pruebas() {
    return "servicio de articulo";
  }
  getArticles(last: any = null): Observable<any> {
    let article = "articles";
    if (last != null) {
      article += "/true";
    }
    return this._http.get(this.url + article);
  }
  getArticle(articleid: String): Observable<any> {
    return this._http.get(this.url + "article/" + articleid);
  }
  search(searchString): Observable<any> {
    return this._http.get(this.url + "search/" + searchString);
  }
  create(article): Observable<any> {
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url + "/save", params, { headers });
  }
}
