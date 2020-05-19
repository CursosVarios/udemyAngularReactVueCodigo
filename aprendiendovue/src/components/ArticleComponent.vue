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
import Global from "../Global";
export default {
  name: "ArticleComponent",
  props: ["article"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>

<style>
</style>