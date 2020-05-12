import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MiComponentComponent } from "./components/mi-component/mi-component.component";

@NgModule({
  declarations: [
    AppComponent,
    MiComponentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
