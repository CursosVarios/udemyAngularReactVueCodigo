import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuelidate from "vuelidate";
import VueMoment from "vue-moment";
import moment from "moment";
import "moment/locale/es";

import ArticleLastComponente from "./components/ArticleLastComponente";
import MiComponente from "./components/MiComponente";
import HelloWorld from "./components/HelloWorld";
import BlogComponent from "./components/BlogComponent";
import FormularioComponent from "./components/FormularioComponent";
import PaginaComponent from "./components/PaginaComponent";

import ErrorComponent from "./components/ErrorComponent";
import PeliculasComponent from "./components/PeliculasComponent";
import SearchComponent from "./components/SearchComponent";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vuelidate);

Vue.use(VueMoment, {
  moment,
});
VueMoment;
const routes = [
  { path: "/home", component: ArticleLastComponente },
  { path: "/peliculas", component: PeliculasComponent },
  { path: "/ultimos-articulos", component: ArticleLastComponente },
  { path: "/mi-componente", component: MiComponente },
  { path: "/hola-mundo", component: HelloWorld },
  { path: "/blog", component: BlogComponent },
  { path: "/blog/busqueda", component: SearchComponent },
  { path: "/blog/nuevo", component: BlogComponent },
  { path: "/blog/articulo/:id", component: BlogComponent },
  { path: "/pagina/:id?", name: "page", component: PaginaComponent },
  { path: "/formulario", component: FormularioComponent },
  { path: "/", component: ArticleLastComponente },
  { path: "*", component: ErrorComponent },
];

console.log(routes);

const router = new VueRouter({
  routes,
  mode: "history",
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
