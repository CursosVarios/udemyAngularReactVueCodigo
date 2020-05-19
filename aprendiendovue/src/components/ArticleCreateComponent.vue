<template src="./CreateArticle.html"></template>

<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import Global from "../Global";
import { required, minLength } from "vuelidate/lib/validators";
import ArticleModel from "../models/ArticleModel";
import Axios from "axios";
import swal from "sweetalert2";
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
            swal.fire("articulo creado", "se creo articulo", "success");
            this.$router.push("/blog/articulo/" + id);
          }
          let formData = new FormData();
          formData.append("file0", this.file, this.file.name);

          Axios.post(Global.url + "upload-image/" + id, formData)
            .then(res => {
              console.log(res.data);

              swal
                .fire(
                  "articulo creado",
                  "se creo articulo con imagen",
                  "success"
                )
                .then(() => {
                  this.$router.push("/blog/articulo/" + id);
                });
              console.log(" se cargo la imagen correctamente");
            })
            .catch(err => {
              console.log("err1" + err);

              this.$router.push("/blog/articulo/" + id);
            });
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