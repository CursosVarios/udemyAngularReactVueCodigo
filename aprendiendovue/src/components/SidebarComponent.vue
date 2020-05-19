<template>
  <aside id="sidebar">
    <div class="sidebat-item" id="nav-blog">
      <h3>Puedes hacer esto</h3>
      <router-link to="/blog/nuevo" class="btn btn-success">crear articulo</router-link>
    </div>
    <div class="sidebat-item" id="search">
      <h3>Puedes hacer esto</h3>
      <p>encuentra el articulo que buscas</p>
      <form action="#" @submit.prevent="gosearch">
        <input type="text" name="search" v-model="searchString" />
        <input type="submit" name="submit" value="buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      searchString: null
    };
  },
  methods: {
    gosearch() {
      if (!this.searchString) {
        return;
      }
      console.log(this.searchString);
      this.$router.push("/blog/rederic/" + this.searchString);
    }
  }
};
</script>

<style>
</style>