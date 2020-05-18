<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="center">
      <ArticleLastComponente></ArticleLastComponente>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import ArticleLastComponente from "./components/ArticleLastComponente.vue";

export default {
  name: "App",
  components: {
    ArticleLastComponente,
    SidebarComponent,
    SliderComponent,
    HeaderComponent
  }
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
@import "./assets/scss/styles.scss";
</style>
