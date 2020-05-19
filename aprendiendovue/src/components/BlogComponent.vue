<template>
  <div>
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles">
          <ArticleComponent :article="article" v-for="article in articles" :key="article._id"></ArticleComponent>
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
import ArticleComponent from "./ArticleComponent.vue";
export default {
  name: "BlogComponent",
  components: {
    ArticleComponent,
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
