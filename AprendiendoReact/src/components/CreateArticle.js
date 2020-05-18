import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Axios from "axios";
import Global from "../Global";
import { Redirect } from "react-router-dom";

class CreateArticle extends Component {
  url = Global.url;

  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: null,
    status: null,
  };

  ChangeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    // console.log(this.state);
  };

  SaveArticle = (e) => {
    e.preventDefault();
    this.ChangeState();
    Axios.post(`${this.url}save`, this.state.article)
      .then((res) => {
        console.log(res.data);
        if (res.data.article) {
          this.setState({
            article: res.data.article,
            status: "success",
          });
        } else {
          this.setState({
            article: null,
            status: "fail",
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          article: null,
          status: "fail",
        });
      });
  };

  render() {
    if (this.state.status === "success") {
      return (
        <Redirect to={`/blog/articulo/${this.state.article._id}`}></Redirect>
      );
    }
    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader"> Crear Articulo</h1>
          <form action="" onSubmit={this.SaveArticle} className="mid-form">
            <div className="form-group">
              <label htmlFor="title">titulo</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.ChangeState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.ChangeState}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0" />
            </div>
            <input type="submit" value="Crear" className="btn btn-success" />
          </form>
        </section>
        <Sidebar />
      </div>
    );
  }
}

export default CreateArticle;
