<template>
  <div>
    <SliderComponent texto="Crear articulo"></SliderComponent>
    <div class="center">
      <section id="content">
        <form action @submit.prevent="CrearArticulo()" class="mid-form">
          <div class="form-group">
            <label for="title">title</label>
            <input type="text" name="title" v-model="article.title" />
            <div v-if="submitted && !$v.article.title.required">Requerido</div>
            <div v-if="submitted && !$v.article.title.minLength">Longitud minima requerida</div>
          </div>
          <div class="form-group">
            <label for="content">contenido</label>
            <textarea name="content" v-model="article.content"></textarea>
            <div v-if="submitted && !$v.article.content.required">Requerido</div>
            <div v-if="submitted && !$v.article.content.minLength">Longitud minima requerida</div>
          </div>
          <div class="form-group">
            <label for="file0">img</label>
            <input type="file" name="file0" />
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Crear" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import Global from "../Global";
import { required, minLength } from "vuelidate/lib/validators";
import ArticleModel from "../models/ArticleModel";
import Axios from "axios";
export default {
  name: "ArticleCreateComponent",
  components: {
    SidebarComponent,
    SliderComponent
  },
  data() {
    return {
      submitted: false,
      article: new ArticleModel("", "", "", "")
    };
  },
  methods: {
    CrearArticulo() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("VAlidar el formulario");
        return false;
      }

      console.log(this.article);
      Axios.post(Global.url + "save", this.article)
        .then(res => {
          console.log(res.data.article);
          this.$router.push("/blog/articulo/" + res.data.article._id);
        })
        .catch(err => console.log(err));
    }
  },
  validations: {
    article: {
      title: { required, minLength: minLength(5) },
      content: { required, minLength: minLength(10) }
    }
  }
};
</script>

<style>
</style>