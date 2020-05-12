import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { appRoutingProviders, routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { MiComponentComponent } from "./components/mi-component/mi-component.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { HeaderComponent } from "./components/header/header.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";

@NgModule({
  declarations: [
    AppComponent,
    MiComponentComponent,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
