<template>
  <div class="mi-componente">
    <h1>titulo de mi componente</h1>
    <h2>{{subtitulo}}</h2>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "subtitulo componente"
    };
  }
};
</script>

 <style lang="scss" scoped>
</style>