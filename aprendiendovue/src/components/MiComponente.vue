<template>
  <div class="mi-componente" id="content">
    <h1>titulo de mi componente</h1>
    <h2>{{ subtitulo }}</h2>

    <h3>reactividad</h3>
    <input type="text" v-model="datoDeInput" />
    <pre>
      {{ $data }}
      </pre
    >
    {{ datoDeInput }}
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "subtitulo componente",
      datoDeInput: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
