<template>
  <section id="content">
    <h2 class="subheader">Pagina pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    {{ nombre }}
    <button v-on:click="actualizarNombre()">Actualizar Nombre</button>
  </section>
</template>

<script>
export default {
  name: "PaginaComponent",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  created() {},
  updated() {},
  destroyed() {},
  data() {
    return {
      id_desde_url: null,
      nombre: "nombre 1",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "nuevo nombre asignado";
    },
  },
};
</script>

<style></style>
