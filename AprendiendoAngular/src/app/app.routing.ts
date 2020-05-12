import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//coponetes creador  y quie seran una pagina
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { from } from "rxjs";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "peliculas", component: PeliculasComponent },
  { path: "pagina", component: PaginaComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// export default appRoutes
