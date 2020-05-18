import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Axios from "axios";
import Global from "../Global";
import { Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Swal from "sweetalert2";

import noImage from "../assets/images/noImage.jpg";

class EditArticle extends Component {
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
        ...this.state.article,
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
      },
    });
    console.log(this.state);

    this.validator.showMessages();
    this.forceUpdate();
  };

  UpdateArticle = (e) => {
    e.preventDefault();
    this.ChangeState();

    if (!this.validator.allValid()) {
      console.log("formulario no es valido");
      this.setState({
        status: "fail",
      });
      return;
    }

    console.log("formulario es valido");
    Axios.put(
      `${this.url}article/${this.state.article._id}`,
      this.state.article
    )
      .then((res) => {
        console.log(res.data);
        if (res.data.msg) {
          this.setState({
            article: res.data.msg,
          });
          if (
            this.state.selectedFile === null ||
            this.state.selectedFile === undefined
          ) {
            this.setState({
              status: "success",
            });
            Swal.fire(
              "articulo Editado",
              "el ariculo fue creado correctamente",
              "success"
            );
          } else {
            const id = this.state.article._id;
            const formData = new FormData();
            console.log("ide creado id", id);
            console.log("ide creado id", this.state.selectedFile);
            formData.append(
              "file0",
              this.state.selectedFile,
              this.state.selectedFile.name
            );

            Axios.post(`${this.url}upload-image/${id}`, formData)
              .then((res) => {
                this.setState({
                  article: res.data.article,
                });

                Swal.fire(
                  "imagen cargada",
                  "el ariculo ya fue cargada",
                  "success"
                );
              })
              .catch((err) => console.log(err));

            this.setState({
              status: "success",
            });
          }
        } else {
          this.setState({
            status: "fail",
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          status: "fail",
        });
      });
  };

  fileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    Axios.get(`${this.url}article/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          article: res.data.article,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.validator = new SimpleReactValidator({
      messages: {
        required: "este campo es obligatorio",
        alpha_num_space: "solo caracteres validos (letras,numeros,espacios)",
      },
    });
  }

  render() {
    if (this.state.status === "success") {
      return (
        <Redirect to={`/blog/articulo/${this.state.article._id}`}></Redirect>
      );
    }
    return (
      <div className="center">
        <section id="content">
          {!this.state.article ? (
            <h1>Cargando ...</h1>
          ) : (
            <React.Fragment>
              <h1 className="subheader"> Editar Articulo</h1>
              <form
                action=""
                onSubmit={this.UpdateArticle}
                className="mid-form"
              >
                <div className="form-group">
                  <label htmlFor="title">titulo</label>
                  <input
                    type="text"
                    name="title"
                    ref={this.titleRef}
                    onChange={this.ChangeState}
                    defaultValue={this.state.article.title}
                  />

                  {this.state.article &&
                    this.validator.message(
                      "title",
                      this.state.article.title,
                      "required|alpha_num_space"
                    )}
                </div>

                <div className="form-group">
                  <label htmlFor="content">Contenido</label>
                  <textarea
                    name="content"
                    ref={this.contentRef}
                    onChange={this.ChangeState}
                    defaultValue={this.state.article.content}
                  ></textarea>
                  {this.state.article &&
                    this.validator.message(
                      "content",
                      this.state.article.content,
                      "required"
                    )}
                </div>

                <div className="form-group">
                  <div className="image-wrap">
                    <img
                      src={
                        this.state.article.image
                          ? this.url + "get-image/" + this.state.article.image
                          : noImage
                      }
                      alt="imagen estrellas"
                    />
                  </div>
                  <label htmlFor="file0">Imagen</label>
                  <input type="file" name="file0" onChange={this.fileChange} />
                </div>
                <input
                  type="submit"
                  value="Actualizar"
                  className="btn btn-success"
                />
              </form>
            </React.Fragment>
          )}
        </section>
        <Sidebar />
      </div>
    );
  }
}

export default EditArticle;
