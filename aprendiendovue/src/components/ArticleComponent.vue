<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="url+'get-image/'+article.image" alt="imagen estrellas" v-if="article.image" />
      <img src="../assets/image/no-image.jpg" alt="imagen estrellas" v-if="!article.image" />
    </div>
    <h2>{{article.title}}</h2>

    <span class="date">{{article.date}}</span>
    <router-link to="'/blog/article'+article._id">leer mas</router-link>
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: ["article"],
  data() {
    return {
      url: "http://localhost:8080/api/"
    };
  }
};
</script>

<style>
</style>