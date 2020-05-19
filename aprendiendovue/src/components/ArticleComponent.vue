<template>
  <div id="articles">
    <article class="article-item" v-for="article in articles" :key="article._id">
      <div class="image-wrap">
        <img :src="url+'get-image/'+article.image" alt="imagen estrellas" v-if="article.image" />
        <img src="../assets/image/no-image.jpg" alt="imagen estrellas" v-if="!article.image" />
      </div>
      <h2>{{article.title}}</h2>

      <span class="date">{{article.date}}</span>
      <router-link to="'/blog/article'+article._id">leer mas</router-link>
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
import Global from "../Global";
export default {
  name: "ArticleComponent",
  props: ["articles"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>

<style>
</style>