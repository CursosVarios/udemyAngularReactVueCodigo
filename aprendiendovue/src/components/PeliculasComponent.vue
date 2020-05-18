
<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>
    <div id="articles">
      <article class="article-item" v-for="pelicula in peliculas" :key="pelicula.title">
        <div class="image-wrap">
          <img :src="pelicula.img" alt="imagen estrellas" />
        </div>
        <h2>{{pelicula.title}}</h2>

        <span
          class="date"
          v-bind:class="{
          yeargreen:pelicula.year > 2018,
          yearred:pelicula.year <= 2018
        }
        "
        >{{pelicula.year}}</span>
        <a href="#">leer mas</a>
        <div class="clearfix"></div>
      </article>
      <!-- agegan lo otros articulos -->
    </div>
  </section>
</template>

<script>
export default {
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