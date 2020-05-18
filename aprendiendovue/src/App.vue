<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";

export default {
  name: "App",
  components: {
    SliderComponent,
    HeaderComponent,
    HelloWorld
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
