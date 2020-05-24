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
  name: "ArticleEditComponent",
  components: {
    SidebarComponent,
    SliderComponent
  },
  data() {
    return {
      submitted: false,
      article: new ArticleModel("", "", "", ""),
      file: "",
      isEdit: true,
      url: Global.url
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    this.getArticleDetails(id);
  },
  methods: {
    getArticleDetails(id) {
      Axios.get(this.url + "article/" + id)
        .then(res => {
          console.log(res.data);
          this.article = res.data.article;
        })
        .catch(err => console.log(err));
    },
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

      //console.log(this.article);
      Axios.put(Global.url + "article/" + this.article._id, this.article)
        .then(res => {
          console.log("llega ");
          console.log(res.data);
          const id = res.data.msg._id;
          if (!this.file) {
            swal.fire(
              "articulo Actualizado ",
              "se Actualizo articulo",
              "success"
            );
            this.$router.push("/blog/articulo/" + id);
          }
          let formData = new FormData();
          formData.append("file0", this.file, this.file.name);

          Axios.post(Global.url + "upload-image/" + id, formData)
            .then(res => {
              console.log(res.data);

              swal
                .fire(
                  "articulo Actualizado",
                  "se Actualizo articulo con imagen",
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