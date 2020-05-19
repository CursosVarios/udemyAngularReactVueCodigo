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
            <input type="file" name="file0" ref="file" @change="FileChange()" />
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
      article: new ArticleModel("", "", "", ""),
      file: ""
    };
  },
  methods: {
    FileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
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
          const id = res.data.article._id;
          if (!this.file) {
            this.$router.push("/blog/articulo/" + id);
          }
          let formData = new FormData();
          formData.append("file0", this.file, this.file.name);

          Axios.post(Global.url + "upload-image/" + id, formData)
            .then(res => {
              console.log(res.data);
              console.log(" se cargo la imagen correctamente");
            })
            .catch(err => console.log("err1" + err));

          this.$router.push("/blog/articulo/" + id);
        })
        .catch(err => console.log("err0" + err));
    }
  },
  validations: {
    article: {
      title: { required, minLength: minLength(4) },
      content: { required, minLength: minLength(5) }
    }
  }
};
</script>

<style>
</style>