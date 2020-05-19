<template>
  <div>
    <SliderComponent texto="Search"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>

        <ArticleComponent :articles="articles"></ArticleComponent>
        <!-- agegan lo otros articulos -->
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
  name: "SearchComponent",
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
        .get(Global.url + "search/")
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
