<template>
  <div>
    <SliderComponent texto="Crear articulo"></SliderComponent>
    <div class="center">
      <section id="content">
        <form action @submit="CrearArticulo" class="mid-form">
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
          <input type="button" value="Crear" class="btn btn-success" />
        </form>
      </section>
      <SidebarComponent></SidebarComponent>
    </div>
  </div>
</template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import Axios from "axios";
import Global from "../Global";
import { required, minLength } from "vuelidate/lib/validators";
import ArticleModel from "../models/ArticleModel";
export default {
  name: "ArticleCreateComponent",
  components: {
    SidebarComponent,
    SliderComponent
  },
  data() {
    return {
      submitted: true,
      article: new ArticleModel("", "", "", "")
    };
  },
  methods: {
    CrearArticulo() {
      ArticleModel;
      Axios.post(Global.url + "")
        .then(res => {
          console.log(res.data);
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