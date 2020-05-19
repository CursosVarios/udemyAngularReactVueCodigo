<template>
  <div>
    <div class="clearfix"></div>

    <div :class="{
      'slider-big': showBtn,
      'slider-small':!showBtn 
    }" id="slider">
      <h1>{{texto}}</h1>
      <router-link to="/blog" class="btn-white" v-if="showBtn">ir al blog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  props: ["texto", "showBtn"]
};
</script>

<style>
</style>