
<template>
  <div>
    <SliderComponent texto="Pagina principal"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ultimos articulos</h2>

        <ArticleComponent :articles="articles"></ArticleComponent>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import Axios from "axios";
import Global from "../Global";
import ArticleComponent from "./ArticleComponent.vue";
export default {
  name: "ArticleLastComponente",
  components: {
    ArticleComponent,
    SidebarComponent,
    SliderComponent
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      Axios.get(Global.url + "articles/5")
        .then(res => {
          console.log(res.data.article);
          this.articles = res.data.article;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>