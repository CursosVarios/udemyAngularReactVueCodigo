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
  getArticles(): Observable<any> {
    return this._http.get(this.url + "articles");
  }
}
