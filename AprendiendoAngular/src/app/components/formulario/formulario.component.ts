import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  public user: any;
  constructor() {
    this.user = {
      name: "",
      lastname: "",
      bio: "",
      gen: "",
    };
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log("formulario enviado");
    console.log(this.user);
  }
}
