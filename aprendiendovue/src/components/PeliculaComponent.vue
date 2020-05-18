<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.img" alt="imagen estrellas" />
    </div>
    <h2>{{pelicula.title}}</h2>

    <span
      class="date"
      v-bind:class="{
          yeargreen:pelicula.year > 2018,
          yearred:pelicula.year <= 2018
        }
        "
    >{{pelicula.year}}</span>
    <a href="#">leer mas</a>
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "peliculaComponent",
  props: ["pelicula"]
};
</script>

<style>
</style>