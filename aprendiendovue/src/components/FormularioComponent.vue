<template>
  <div>
    <SliderComponent></SliderComponent>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  components: {
    SidebarComponent,
    SliderComponent
  },
  name: "FormularioComponent"
};
</script>

<style></style>
