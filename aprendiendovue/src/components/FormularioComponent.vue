<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
        <dir>
          Nombre completo
          {{user.nombre + " "+user.apellido }}
        </dir>
        <form action class="mid-form" @submit="enviaFormulario">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">este campo es requerido</div>
            <div v-if="submitted && !$v.user.nombre.minLength">este campo le faltan caracteres</div>
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellido" />
            <div v-if="submitted && !$v.user.apellido.required">este campo es requerido</div>
            <div v-if="submitted && !$v.user.apellido.minLength">este campo le faltan caracteres</div>
          </div>

          <div class="form-group">
            <label for="bio">biografia</label>
            <textarea name="bio" id="bio" v-model="user.biografia"></textarea>
            <div v-if="submitted && !$v.user.biografia.required">este campo es requerido</div>
            <div v-if="submitted && !$v.user.biografia.minLength">este campo le faltan caracteres</div>
          </div>

          <div class="form-group radiobuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" />hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" />mujer
            <input type="radio" name="genero" value="otro" checked v-model="user.genero" />
            otro
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "FormularioComponent",
  components: {
    SidebarComponent
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellido: "",
        biografia: "",
        genero: ""
      }
    };
  },
  methods: {
    enviaFormulario(e) {
      e.preventDefault();
      this.submitted = true;
      console.log(this.user);
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      console.log("validacon pasada");
    }
  },
  validations: {
    user: {
      nombre: { required, minLength: minLength(2) },
      apellido: { required, minLength: minLength(2) },
      biografia: { required, minLength: minLength(4) }
    }
  }
};
</script>

<style></style>
