<template>
  <div>
    <SliderComponent texto="Blog"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
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
      articles: []
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      const url = "http://localhost:8080/api/";
      axios
        .get(url + "articles")
        .then(res => {
          console.log(res);
          this.articles = res.data.article;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
