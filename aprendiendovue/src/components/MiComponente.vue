<template>
  <div>
    <SliderComponent texto="Mi componente"></SliderComponent>
    <div class="center">
      <div class="mi-componente" id="content">
        <h1>titulo de mi componente</h1>
        <h2>{{ subtitulo }}</h2>

        <h2>reactividad</h2>
        <input type="text" v-model="datoDeInput" />
        <pre>
          {{ $data }}
        </pre>
        {{ datoDeInput }}
        <h2>directivas</h2>
        <input type="number" v-model="edad" />
        la edad es
        <strong>{{edad}}</strong>
        <br />
        <p class="alert-danger-provisional" v-if="edad && edad >= 60">tercera edad</p>
        <p class="alert-danger-provisional" v-else-if="edad && edad >= 18">Mayor de edad</p>
        <!-- <p class="alert-danger-provisional" v-if="edad < 18">Menor de edad</p> -->
        <p class="alert-danger-provisional" v-else>Menor de edad</p>
        <hr />
        <h2>Directiva iterativa</h2>
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
      </div>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
import SliderComponent from "./SliderComponent.vue";
export default {
  components: {
    SliderComponent,
    SidebarComponent
  },
  name: "MiComponente",
  data() {
    return {
      subtitulo: "subtitulo componente",
      datoDeInput: "",
      edad: 0,
      peliculas: ["bataman", "spiderman", "el señor de los anillos"]
    };
  }
};
</script>

<style lang="scss" scoped></style>
