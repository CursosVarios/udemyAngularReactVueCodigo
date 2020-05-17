import React from "react";
import { NavLink } from "react-router-dom";
const Navegation = () => {
  return (
    <nav id="menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/ruta-prueba">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/mi-componente">Formulario</NavLink>
        </li>
        <li>
          <NavLink to="/pg1">pagina1</NavLink>
        </li>
        <li>
          <NavLink to="/pg2">pagina2</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navegation;
