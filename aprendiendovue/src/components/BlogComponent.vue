<template>
  <div>
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles">
          <article class="article-item" v-for="article in articles" :key="article._id">
            <div class="image-wrap">
              <img
                :src="url+'get-image/'+article.image"
                alt="imagen estrellas"
                v-if="article.image"
              />
              <img src="../assets/image/no-image.jpg" alt="imagen estrellas" v-if="!article.image" />
            </div>
            <h2>{{article.title}}</h2>

            <span class="date">{{article.date}}</span>
            <router-link to="'/blog/article'+article._id">leer mas</router-link>
            <div class="clearfix"></div>
          </article>
          <!-- agegan lo otros articulos -->
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  name: "BlogComponent",
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      articles: [],
      url: "http://localhost:8080/api/",
      keyarticle: 0
    };
  },
  mounted() {
    this.getArticle();
  },
  computed: {},
  methods: {
    getArticle() {
      axios
        .get(this.url + "articles")
        .then(res => {
          console.log(res.data.article);
          this.articles = res.data.article;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
