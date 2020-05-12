import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "espar",
})
export class EsParPiPe implements PipeTransform {
  transform(value: any) {
    const ano = value; /* .getFullYear() */
    let espar = "impar";
    if (ano % 2 == 0) {
      espar = "par";
    }

    return `el año ${ano} es ${espar}`;
  }
}
