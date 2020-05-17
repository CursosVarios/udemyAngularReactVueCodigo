import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Axios from "axios";
import Articles from "./Articles";

class Blog extends Component {
  state = {
    articles: {},
  };

  render() {
    Axios.get("http://localhost:8080/api/articles")
      .then((res) => {
        // this.setState({
        //   articles: res.data.article,
        // });
        console.log(res.data.article);
      })
      .catch((err) => console.log("ERROR", err));
    return (
      <React.Fragment>
        <Slider title=" Pagina Blog" size="slider-small" />
        <div className="center">
          <div className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}

            {this.state.articles.length > 0 &&
              this.state.articles.map((article) => {
                return <h1 key={article._id}> {article._id}</h1>;
              })}
            <Articles></Articles>
          </div>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
