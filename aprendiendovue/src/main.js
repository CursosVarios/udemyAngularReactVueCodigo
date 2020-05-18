import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import ArticleLastComponente from "./components/ArticleLastComponente";
import MiComponente from "./components/MiComponente";
import HelloWorld from "./components/HelloWorld";
import BlogComponent from "./components/BlogComponent";
import FormularioComponent from "./components/FormularioComponent";
import PaginaComponent from "./components/PaginaComponent";

import ErrorComponent from "./components/ErrorComponent";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: ArticleLastComponente },
  { path: "/ultimos-articulos", component: ArticleLastComponente },
  { path: "/mi-componente", component: MiComponente },
  { path: "/hola-mundo", component: HelloWorld },
  { path: "/blog", component: BlogComponent },
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
