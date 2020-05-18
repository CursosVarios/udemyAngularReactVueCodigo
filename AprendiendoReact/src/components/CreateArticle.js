import React, { Component } from "react";
import Sidebar from "./Sidebar";

class CreateArticle extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();

  state = {
    article: null,
  };

  ChangeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    console.log(this.state);
  };

  SaveArticle = (e) => {
    e.preventDefault();
    this.ChangeState();
  };

  render() {
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
              <label htmlFor="content"></label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.ChangeState}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file0"></label>
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
