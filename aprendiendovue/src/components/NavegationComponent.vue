<template>
  <nav id="menu">
    <ul>
      <li>
        <router-link to="/home" active-class="active">Inicio</router-link>
      </li>
      <li>
        <router-link to="/blog" active-class="active">Blog</router-link>
      </li>
      <li>
        <router-link to="/formulario" active-class="active">Formulario</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'page', params: { id: 5 } }" active-class="active">pagina1</router-link>
      </li>
      <li>
        <router-link to="/mi-componente" active-class="active">pagina2</router-link>
      </li>
      <li>
        <router-link to="/peliculas" active-class="active">Peliculas</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavegationComponent"
};
</script>
