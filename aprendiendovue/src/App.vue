<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,

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
