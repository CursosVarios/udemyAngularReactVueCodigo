import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nombreRef = React.createRef();
  apellidoRef = React.createRef();
  bioRef = React.createRef();
  GHRef = React.createRef();
  GMRef = React.createRef();
  GORef = React.createRef();
  recibirFormularo = (e) => {
    e.preventDefault();
    alert("enviado");
    console.log(this.nombreRef.current.value);
    console.log(this.apellidoRef.current.value);
    console.log(this.bioRef.current.value);
    console.log(this.GHRef.current.value);
    console.log(this.GMRef.current.value);
    console.log(this.GORef.current.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="center">
          <div className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1> */}
            <h1 className="subheader">Formulario </h1>
            <form
              action=""
              className="mid-form"
              onSubmit={this.recibirFormularo}
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
