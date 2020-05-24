<template>
  <div>
    <SliderComponent texto="Articulo "></SliderComponent>
    <div class="center">
      <section id="content">
        <article class="article-item-detail" v-if="article">
          <div class="image-wrap">
            <img :src="url+'get-image/'+article.image" :alt="article.title" v-if="article.image" />
            <img src="../assets/image/no-image.jpg" :alt="article.title" v-if="!article.image" />
          </div>
          <h1 class="subheader">{{article.title}}</h1>

          <span class="date">{{article.date| moment('from','now') }}</span>
          <div class="clearfix"></div>
          <p>{{article.content}}</p>
          <router-link class="btn btn-warning" :to="'/blog/editar/'+article._id">Editar</router-link>
          <a class="btn btn-alert" @click="EliminarArticulo(article._id)">Eliminar</a>
        </article>
        <!-- agegan lo otros articulos -->
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import Global from "../Global";
import Axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "ArticleDetailsComponent",
  components: {
    SliderComponent,
    SidebarComponent
  },
  data() {
    return {
      url: Global.url,
      article: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.getArticleDetails(id);
  },
  methods: {
    getArticleDetails(id) {
      Axios.get(this.url + "article/" + id)
        .then(res => {
          console.log(res.data);
          this.article = res.data.article;
        })
        .catch(err => console.log(err));
    },
    EliminarArticulo(id) {
      Axios.delete(this.url + "article/" + id)
        .then(res => {
          console.log(res);
          //
          Swal.fire(
            "Borrado Correctamente",
            "El articulo se a borrado",
            "success"
          );
          this.$router.push("/blog");
        })
        .catch(err => console.log("No se puedo borrar" + err));
    }
  }
};
</script>

<style>
</style>