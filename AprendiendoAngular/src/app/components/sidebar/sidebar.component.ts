import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public search: string;
  private url: string;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goSearch() {
    // this._router.navigate(["/buscar/" + this.search]);

    this._router.navigate(["/buscar", this.search]);
  }
}
