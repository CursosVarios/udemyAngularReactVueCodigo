<template>
  <section id="content">
    <h2 class="subheader">Pagina pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
  </section>
</template>

<script>
export default {
  name: "PaginaComponent",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null,
    };
  },
};
</script>

<style></style>
