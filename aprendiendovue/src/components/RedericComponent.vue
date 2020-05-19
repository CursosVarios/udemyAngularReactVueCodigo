<template>
  <h1>rederic ..</h1>
</template>

<script>
export default {
  name: "RedericComponent",
  mounted() {
    this.$router.push("/blog/busqueda/" + this.$route.params.search);
  }
};
</script>

<style>
</style>