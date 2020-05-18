import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Global from "../Global";
import noImage from "../assets/images/noImage.jpg";
import Moment from "react-moment";
import "moment/locale/es";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
class ArticleDetails extends Component {
  url = Global.url;
  state = {
    article: null,
    status: null,
  };
  getarticle = (id) => {
    Axios.get(this.url + "article/" + id)
      .then((res) => {
        console.log(res);
        this.setState({
          article: res.data.article,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getarticle(this.props.match.params.id);
  }

  deleteArticle() {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        const id = this.state.article._id;
        Axios.delete(`${this.url}article/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire(
              "articulo Borrado",
              "el ariculo fue borro correctamente",
              "success"
            );
            this.setState({
              article: res.data.article,
              status: "delete",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }
  //const article = this.props.match.params.id;

  render() {
    if (this.state.status === "delete") {
      return <Redirect to="/blog"></Redirect>;
    }
    const article = this.state.article;
    console.log("articulo", article);
    return (
      <React.Fragment>
        <Slider title=" Pagina Blog" size="slider-small" />
        <div className="center">
          <section id="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}
            {article ? (
              article._id ? (
                <article className="article-item-detail" id="article-template">
                  <div className="image-wrap">
                    <img
                      src={
                        article.image
                          ? this.url + "get-image/" + article.image
                          : noImage
                      }
                      alt="imagen estrellas"
                    />
                  </div>
                  <h1 className="subheader">{article.title}</h1>
                  <span className="date">
                    <Moment fromNow>{article.date}</Moment>
                  </span>
                  <div className="clearfix"></div>
                  <p>{article.content}</p>
                  <Link to="/blog/editar/" className="btn btn-warning">
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteArticle();
                    }}
                  >
                    Eliminar
                  </button>
                </article>
              ) : (
                <h2>No se encontro ningun articulo</h2>
              )
            ) : (
              <h2>Cargando ...</h2>
            )}
          </section>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}
export default ArticleDetails;
