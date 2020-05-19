<template>
  <h1>rederic ..</h1>
</template>

<script>
export default {
  name: "RedericComponent",
  mounted() {
    const search = this.$route.params.search;
    this.$router.push("/blog/busqueda/" + search);
  }
};
</script>

<style>
</style>