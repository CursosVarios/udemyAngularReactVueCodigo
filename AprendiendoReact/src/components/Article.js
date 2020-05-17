import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import noImage from "../assets/images/noImage.jpg";

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

          <span className="date">{article.date} </span>
          <NavLink to="/blog/article">leer mas</NavLink>
          <div className="clearfix"></div>
        </article>
      </React.Fragment>
    );
  }
}
export default Article;
