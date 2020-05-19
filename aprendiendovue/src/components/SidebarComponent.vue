<template>
  <aside id="sidebar">
    <div class="sidebat-item" id="nav-blog">
      <h3>Puedes hacer esto</h3>
      <router-link to="/blog/nuevo" class="btn btn-success">crear articulo</router-link>
    </div>
    <div class="sidebat-item" id="search">
      <h3>Puedes hacer esto</h3>
      <p>encuentra el articulo que buscas</p>
      <form action="#">
        <input type="text" name="search" />
        <input type="submit" name="submit" value="buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent"
};
</script>

<style>
</style>