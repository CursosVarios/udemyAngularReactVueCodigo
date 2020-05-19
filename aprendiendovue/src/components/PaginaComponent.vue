<template>
  <div>
    <SliderComponent texto="Pagina de pruebas"></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        {{ nombre }}
        <button v-on:click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigir()">redirigir</button>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  components: {
    SidebarComponent,
    SliderComponent
  },
  name: "PaginaComponent",
  mounted() {
    this.id_desde_url = this.$route.params.id;

    console.log("mount");
  },
  created() {
    console.log("create");
  },
  updated() {
    console.log("update");
  },
  destroyed() {},
  data() {
    return {
      id_desde_url: null,
      nombre: "nombre 1"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "nuevo nombre asignado";
    },
    redirigir() {
      this.$router.push("/blog");
      // no es recomendable la sigient eopcion ya que no refreca l pagina
      // this.$router.push({ name: "page", params: { id: "reder" } });
    }
  }
};
</script>

<style></style>
