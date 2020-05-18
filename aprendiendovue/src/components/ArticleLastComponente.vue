
<template>
  <section id="content">
    <h2 class="subheader">Ultimos articulos</h2>
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://images.unsplash.com/photo-1588894181387-939771976bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=306&q=80"
            alt="imagen estrellas"
          />
        </div>
        <h2>articulo de prueba</h2>

        <span class="date">Hace 5 minutos</span>
        <a href="#">leer mas</a>
        <div class="clearfix"></div>
      </article>
      <!-- agegan lo otros articulos -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleLastComponente"
};
</script>

<style>
</style>