<template>
  <nav id="menu">
    <ul>
      <li>
        <router-link to="/home">Inicio</router-link>
      </li>
      <li>
        <router-link to="/blog">Blog</router-link>
      </li>
      <li>
        <router-link to="/formulario">Formulario</router-link>
      </li>
      <li>
        <router-link to="/pagina">pagina1</router-link>
      </li>
      <li>
        <router-link to="/mi-componente">pagina2</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { name: "NavegationComponent" };
</script>
