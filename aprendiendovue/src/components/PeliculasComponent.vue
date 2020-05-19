
<template>
  <div>
    <SliderComponent></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div id="articles">
          <peliculaComponent
            :pelicula="pelicula"
            v-for="pelicula in peliculas"
            :key="pelicula.title"
          ></peliculaComponent>
          <!-- v-for="pelicula in peliculas" :key="pelicula.title" /> -->
          <!-- agegan lo otros articulos -->
        </div>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import PeliculaComponent from "./PeliculaComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  components: {
    SliderComponent,
    SidebarComponent,
    PeliculaComponent
  },
  name: "PeliculasComponent",
  data() {
    return {
      peliculas: [
        {
          title: "Batman vs superman",
          year: "2019",
          img:
            "https://static.comicvine.com/uploads/original/12/123129/3141222-8739510139-22695.png"
        },
        {
          title: "Spider man",
          year: "2020",
          img:
            "https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg"
        },
        {
          title: "señor de los anillos",
          year: "2018",
          img:
            "https://as.com/tikitakas/imagenes/2019/02/18/portada/1550473885_404803_1550474060_noticia_normal.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>