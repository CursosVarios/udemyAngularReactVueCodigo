<template>
  <div>
    <SliderComponent :texto="'Busqueda : '+search"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader" v-if="articles">Articulos encontrados</h2>
        <h2 class="subheader" v-else>Sin Resultados</h2>

        <ArticleComponent :articles="articles" v-if="articles"></ArticleComponent>
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
      articles: null,
      search: ""
    };
  },
  mounted() {
    this.search = this.$route.params.search;
    this.getArticleBySearch();
  },
  computed: {},
  methods: {
    getArticleBySearch() {
      console.log(Global.url + "search/" + this.search);
      axios
        .get(Global.url + "search/" + this.search)
        .then(res => {
          console.log(res.data.art);
          this.articles = res.data.art;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
