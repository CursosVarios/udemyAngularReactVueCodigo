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
import Global from "../Global";
export default {
  name: "BlogComponent",
  components: {
    ArticleComponent,
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.getArticle();
  },
  computed: {},
  methods: {
    getArticle() {
      axios
        .get(Global.url + "articles")
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
