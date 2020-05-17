import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../Global";
import noImage from "../assets/images/noImage.jpg";
import Moment from "react-moment";
import "moment/locale/es";

class Article extends Component {
  url = Global.url;
  render() {
    const article = this.props.article;
    console.log(article);
    return (
      <React.Fragment>
        <article className="article-item" id="article-template">
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
          <h2>{article.title}</h2>
          <span className="date">
            <Moment fromNow>{article.date}</Moment>
          </span>
          <Link to={"/blog/articulo/" + article._id}>leer mas</Link>
          <div className="clearfix"></div>
        </article>
      </React.Fragment>
    );
  }
}
export default Article;
