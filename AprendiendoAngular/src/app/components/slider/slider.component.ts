import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  //se resibe la propiedad nombre
  @Input() nombre: string;
  constructor() {}

  ngOnInit(): void {}
}
