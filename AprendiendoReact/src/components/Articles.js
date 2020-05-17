import React, { Component } from "react";
import Axios from "axios";
import Article from "./Article";
import Global from "../Global";

class Articles extends Component {
  state = {
    articles: {},
    status: null,
  };
  url = Global.url;
  componentWillMount() {
    if (this.props.search) {
      this.getSearch(this.props.search);
    } else if (this.props.home === "true") {
      this.getArticles(1);
    } else {
      this.getArticles();
    }
  }
  getArticles = (last) => {
    Axios.get(this.url + "articles" + (last ? "/1" : ""))
      .then((res) => {
        this.setState({
          articles: res.data.article,
          status: "success",
        });
        console.log(res.data.article);
      })
      .catch((err) => console.log("ERROR", err));
  };
  getSearch = (search) => {
    Axios.get(this.url + "/search/" + search)
      .then((res) => {
        console.log(res);
        this.setState({
          articles: res.data.art,
          status: "success",
        });
        console.log(res.data.art);
      })
      .catch((err) => {
        console.log("ERROR", err);
        this.setState({
          articles: {},
          status: "success",
        });
      });
  };

  render() {
    return (
      <div className="articles">
        {this.state.status === "success" ? (
          this.state.articles.length >= 0 ? (
            <div id="articles">
              {this.state.articles.map((artic) => {
                return <Article key={artic._id} article={artic}></Article>;
              })}
            </div>
          ) : (
            <React.Fragment>
              <h2 className="subheader">no se encontraron elementos</h2>
              <p>no hya datos en esta seccion</p>
            </React.Fragment>
          )
        ) : (
          <h2>Cargando ...</h2>
        )}
      </div>
    );
  }
}

export default Articles;
