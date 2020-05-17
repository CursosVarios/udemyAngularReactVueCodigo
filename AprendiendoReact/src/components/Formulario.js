import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidoRef = React.createRef();
  bioRef = React.createRef();
  GHRef = React.createRef();
  GMRef = React.createRef();
  GORef = React.createRef();

  state = {
    user: {},
  };
  recibirFormularo = (e) => {
    e.preventDefault();
    const user = {
      nombre: this.nombreRef.current.value,
      apellido: this.apellidoRef.current.value,
      bio: this.bioRef.current.value,
      Genero: this.GHRef.current.checked
        ? this.GHRef.current.value
        : this.GMRef.current.checked
        ? this.GMRef.current.value
        : this.GORef.current.value,
    };
    //alert("enviado");
    console.log(user);
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="center">
          <div id="content">
            {/* <h1 className="subheader">Ultimos articulos</h1> */}
            <h1 className="subheader">Formulario </h1>

            {this.state.user.nombre && (
              <ul>
                <li>{this.state.user.nombre}</li>
                <li>{this.state.user.apellido}</li>
                <li>{this.state.user.bio}</li>
                <li>{this.state.user.genero}</li>
              </ul>
            )}

            <form
              action=""
              className="mid-form"
              onSubmit={this.recibirFormularo}
              onChange={this.recibirFormularo}
            >
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidoRef} />
              </div>
              <div className="form-group">
                <label htmlFor="bio">biografia</label>
                <textarea name="bio" id="bio" ref={this.bioRef}></textarea>
              </div>
              <div className="form-group radiobuttons">
                <input
                  type="radio"
                  name="genero"
                  ref={this.GHRef}
                  value="hombre"
                />
                hombre
                <input
                  type="radio"
                  name="genero"
                  ref={this.GMRef}
                  value="mujer"
                />
                mujer
                <input
                  type="radio"
                  name="genero"
                  ref={this.GORef}
                  value="otro"
                />
                otro
              </div>
              <div className="clearfix"></div>
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Formulario;
