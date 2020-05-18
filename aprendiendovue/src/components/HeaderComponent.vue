<template>
  <header id="header">
    <div class="center">
      <div id="logo">
        <img src="../assets/logo.png" alt="logo de vue" />
        <span id="brand">
          <strong>Master</strong>FramaWorksJS
        </span>
      </div>
      <NavegationComponent></NavegationComponent>
    </div>
  </header>
</template>

<script>
import NavegationComponent from "./NavegationComponent.vue";
export default {
  components: {
    NavegationComponent
  },
  name: "HeaderComponent"
};
</script>

