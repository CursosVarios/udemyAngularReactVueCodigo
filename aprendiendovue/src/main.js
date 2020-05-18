import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import ArticleLastComponente from "./components/ArticleLastComponente";
import MiComponente from "./components/MiComponente";
import HelloWorld from "./components/HelloWorld";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: ArticleLastComponente },
  { path: "/ultimos-articulos", component: ArticleLastComponente },
  { path: "/mi-component", component: MiComponente },
  { path: "/hola-mundo", component: HelloWorld },
  { path: "/", component: ArticleLastComponente },
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
