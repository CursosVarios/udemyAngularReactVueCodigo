import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Global from "../Global";
import noImage from "../assets/images/noImage.jpg";
import Moment from "react-moment";
import "moment/locale/es";
import Axios from "axios";
class ArticleDetails extends Component {
  url = Global.url;
  state = { article: null };
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

  //const article = this.props.match.params.id;

  render() {
    const article = this.state.article;
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
